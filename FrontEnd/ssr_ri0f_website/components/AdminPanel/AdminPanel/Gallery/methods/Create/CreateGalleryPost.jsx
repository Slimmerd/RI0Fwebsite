import React, {useEffect, useState} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Spin} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Field, FieldArray, reduxForm, stopSubmit} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {makeField} from "../../../../../../utils/formHandler";
import {AuthStatus} from "../../../../../../redux/auth-reducer";
import styled from "styled-components";
import {requiredField} from "../../../../../../utils/formValidations";
import {PicturesListField} from "./PicturesfieldArray";
import {postPost} from "../../../../../../redux/gallery-reducer";


const StyledDrawer = styled.div`
  .ant-btn > .ant-btn-loading-icon .anticon {
    padding-right: 0 !important;
  }

  .ant-btn-loading-icon {
    padding-right: 10px !important;
  }
`

const AInput = makeField(Input);

const CreateGalleryPost = (props) => {
    const {handleSubmit, submitSucceeded, pristine, submitting, reset, invalid} = props
    const fetching = useSelector((state) => state.gallery.fetching)
    const [visible, isVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    const showDrawer = () => {
        isVisible(true)
    };

    const onClose = () => {
        isVisible(false)
        reset()
    };

    useEffect(() => {
        if (fetching) {
            setLoading(true)
        } else {
            setLoading(false)
        }

        if (!fetching && submitSucceeded) {
            onClose()
        }
    }, [fetching, submitSucceeded])

    return (
        <div>
            <>
                <Button type="primary" onClick={showDrawer}>
                    <PlusOutlined/> Добавить публикацию
                </Button>

                <Drawer
                    title="Новая публикация"
                    width={'50%'}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{paddingBottom: 80}}

                    footer={
                        <StyledDrawer
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={onClose} style={{marginRight: 8}}>
                                Отмена
                            </Button>
                            <Button onClick={!invalid ? handleSubmit : null} htmlType="submit" type="primary"
                                    loading={loading} disabled={pristine || submitting || fetching || invalid}>
                                Опубликовать
                            </Button>
                        </StyledDrawer>
                    }
                >
                    <Spin spinning={loading}>
                        <Form layout="vertical" hideRequiredMark style={{padding: '10px 16px'}}>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Field label="Название на Русском" name="name_ru" component={AInput}
                                           placeholder="Название на Русском" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>

                                <Col span={12}>
                                    <Field label="Название на Английском" name="name_en" component={AInput}
                                           placeholder="Название на Английском" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <FieldArray name='images' component={PicturesListField}/>
                                </Col>
                            </Row>
                        </Form>
                    </Spin>
                </Drawer>
            </>
        </div>
    );
};

const NewsForm = reduxForm({
    form: 'GalleryForm' // a unique identifier for this form
})(CreateGalleryPost)

const GalleryPublish = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = async (formData) => {
        await dispatch(AuthStatus())

        if (isAuth) {
            await dispatch(postPost(formData.name_ru, formData.name_en, formData.images))
        } else {
            dispatch(stopSubmit('GalleryForm'))
        }
    }

    return <div>
        <NewsForm onSubmit={onSubmit}/>
    </div>
}

export default GalleryPublish