import React, {useEffect, useState} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Spin} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Field, reduxForm, stopSubmit} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {postSponsor} from "../../../../redux/sponsors-reducer";
import {requiredField} from "../../../../utils/formValidations";
import {AuthStatus} from "../../../../redux/auth-reducer";
import {makeField} from "../../../../utils/formHandler";


const StyledDrawer = styled.div`
  .ant-btn > .ant-btn-loading-icon .anticon {
    padding-right: 0 !important;
  }

  .ant-btn-loading-icon {
    padding-right: 10px !important;
  }
`

const AInput = makeField(Input);

const CreateDonater = (props) => {
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
                    <PlusOutlined/> Добавить спонсора
                </Button>

                <Drawer
                    title="Новая спонсор"
                    width={'50%'}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{paddingBottom: 80}}

                    footer={
                        <StyledDrawer style={{
                            textAlign: 'right',
                        }}>
                            <Button onClick={onClose} style={{marginRight: 8}}>
                                Отмена
                            </Button>
                            <Button onClick={!invalid ? handleSubmit : null} htmlType="submit" type="primary"
                                    loading={loading} disabled={pristine || submitting || fetching || invalid}>
                                Опубликовать
                            </Button>
                        </StyledDrawer>
                    }>
                    <Spin spinning={loading}>
                        <Form layout="vertical" hideRequiredMark style={{padding: '10px 16px'}}>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Field label="Спонсор" name="name" component={AInput}
                                           hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>

                                <Col span={12}>
                                    <Field label="Категория" name="category" component={AInput}
                                           placeholder="Main или General" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Field label="Ссылка на фото" name="img" component={AInput}
                                           placeholder="Ссылка" hasFeedback/>
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
    form: 'DonaterForm' // a unique identifier for this form
})(CreateDonater)

const DonaterPublish = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = async (formData) => {
        await dispatch(AuthStatus())

        if (isAuth) {
            await dispatch(postSponsor(formData.name, formData.category, formData.img))
        } else {
            dispatch(stopSubmit('DonaterForm'))
        }
    }

    return <div>
        <NewsForm onSubmit={onSubmit}/>
    </div>
}

export default DonaterPublish