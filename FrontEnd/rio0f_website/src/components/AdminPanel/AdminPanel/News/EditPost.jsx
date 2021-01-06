import React, {useState, useEffect, useMemo} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Spin} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {Field, reduxForm, stopSubmit} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {makeField} from "../../../../utils/formHandler";
import {AuthStatus} from "../../../../redux/auth-reducer";
import styled from "styled-components";
import {requiredField} from "../../../../utils/formValidations";
import {getParticularNews} from "../../../../redux/actNews-reducer";
import {EditNews} from "../../../../redux/news-reducer";


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

const EditPost = (props) => {
    let {handleSubmit, submitSucceeded, pristine, submitting, reset, invalid, initialize} = props
    const fetching = useSelector((state) => state.newsPage.fetching)
    const news = useSelector((state) => state.actNewsPage)

    const [visible, isVisible] = useState(false)    //For drawer
    const [loading, setLoading] = useState(true)    // For drawer
    const dispatch = useDispatch();

    const showDrawer = () => {
        dispatch(getParticularNews(props.selectedID))
        isVisible(true)
    };

    const onClose = () => {
        isVisible(false)
        reset()
    };

    useMemo(() => {
        initialize(news)
    }, [news])

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
                <Button type="primary" onClick={showDrawer} disabled={!props.hasSelected}>
                    <EditOutlined/> Редактировать
                </Button>

                <Drawer
                    title="Редактирование новости"
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
                                Сохранить
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
                                        label="Ссылка на Главное фото" component={AInput} value={news.url}
                                        placeholder="Please enter url"/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Field label="Автор" name="author_ru" component={AInput} disabled={true}/>
                                </Col>

                                <Col span={12}>
                                    <Field label="Ссылка" name="url" component={AInput} disabled={true}
                                           addonBefore={process.env.REACT_APP_BASEURL}/>
                                </Col>
                            </Row>


                        </Form>
                    </Spin>
                </Drawer>
            </>
        </div>
    );
};

const EditedNewsForm = reduxForm({
    form: 'EditNewsForm', // a unique identifier for this form
})(EditPost)

const NewsEdit = ({selectedID, hasSelected}) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = async (formData) => {
        await dispatch(AuthStatus())

        if (isAuth) {
            dispatch(EditNews(formData.name_ru, formData.name_en, formData.text_ru, formData.text_en, formData.img, formData.url))

        } else {
            dispatch(stopSubmit('NewsForm'))
        }
    }

    return <div>
        <EditedNewsForm selectedID={selectedID} hasSelected={hasSelected} onSubmit={onSubmit}/>
    </div>
}

export default NewsEdit