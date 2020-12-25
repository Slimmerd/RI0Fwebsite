import React, {useState, useEffect} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Spin} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Field, reduxForm, stopSubmit} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {CreateNews} from "../../../../../redux/news-reducer";
import {makeField} from "../../../../../utils/formHandler";
import {AuthStatus} from "../../../../../redux/auth-reducer";
import styled from "styled-components";
import {requiredField} from "../../../../../utils/formValidations";


const StyledDrawer = styled.div`
  .ant-btn > .ant-btn-loading-icon .anticon {
    padding-right: 0 !important;
  }

  .ant-btn-loading-icon {
    padding-right: 10px !important;
  }
`

const AInput = makeField(Input);
const ATextarea = makeField(Input.TextArea);

const CreatePost = (props) => {
    const {handleSubmit, submitSucceeded, pristine, submitting, reset, invalid} = props
    const fetching = useSelector((state) => state.newsPage.fetching)
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
            isVisible(false)
            reset()
        }
    }, [fetching, submitSucceeded, reset])

    return (
        <div>
            <>
                <Button type="primary" onClick={showDrawer}>
                    <PlusOutlined/> Добавить Новость
                </Button>

                <Drawer
                    title="Новая новость"
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
                                    <Field label="Текст на Русском" name="text_ru" component={ATextarea}
                                           placeholder="Текст новости на Русском" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Field label="Текст на Английском" name="text_en" component={ATextarea}
                                           placeholder="Текст новости на Английском" hasFeedback
                                           rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Field
                                        name="img"
                                        label="Ссылка на Главное фото" component={AInput}
                                        placeholder="Please enter url"/>
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
    form: 'NewsForm' // a unique identifier for this form
})(CreatePost)

const NewsPublish = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = async (formData) => {
        await dispatch(AuthStatus())

        if (isAuth) {
            await dispatch(CreateNews(formData.name_ru, formData.name_en, formData.text_ru, formData.text_en, formData.img))
        } else {
            dispatch(stopSubmit('NewsForm'))
        }
    }

    return <div>
        <NewsForm onSubmit={onSubmit}/>
    </div>
}

export default NewsPublish


// TODO: Multi language form