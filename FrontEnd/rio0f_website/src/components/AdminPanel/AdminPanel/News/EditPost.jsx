import React, {useState, useEffect} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Spin} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Field, reduxForm, stopSubmit} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {makeField} from "../../../../utils/formHandler";
import {AuthStatus} from "../../../../redux/auth-reducer";
import styled from "styled-components";
import {requiredField} from "../../../../utils/formValidations";
import {getParticularNews} from "../../../../redux/actNews-reducer";


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
    const {handleSubmit, submitSucceeded, pristine, submitting, reset, invalid} = props
    const fetching = useSelector((state) => state.newsPage.fetching)
    const news = useSelector((state) => state.actNewsPage)
    const [visible, isVisible] = useState(false)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    const showDrawer = () => {
        isVisible(true)
    };

    const onClose = () => {
        isVisible(false)
        reset()
    };

    // const selcted = selectedID ? selectedID.length > 0 : false

    useEffect(() => {
        console.warn('useEffect EDIT POST')
//         if (props.selectedID.length !== 0) {
//             dispatch(getParticularNews(props.selectedID))
//         }
// ds
        if (fetching) {
            setLoading(true)
        } else {
            setLoading(false)
        }

        if (!fetching && submitSucceeded) {
            isVisible(false)
            reset()
        }
    }, [dispatch, fetching, submitSucceeded, reset, props.selectedID])

    return (
        <div>
            <>
                <Button type="primary" onClick={showDrawer} disabled={!props.hasSelected}>
                    <PlusOutlined/> Редактировать
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
                                           defaultValue={'news.name_ru'} value={'sadsafas'}
                                           placeholder="Название на Русском" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                                <Field name="firstName"
                                       component="input"
                                       type="text"
                                       placeholder="First Name"
                                       defaultValue={'fdsfs'}/>


                                <Col span={12}>
                                    <Field label="Название на Английском" name="name_en" component={AInput}
                                           defaultValue={'news.name_en'}
                                           placeholder="Название на Английском" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Field label="Текст на Русском" name="text_ru" component={ATextarea}
                                           value={news.text_ru}
                                           placeholder="Текст новости на Русском" hasFeedback rules={[{required: true}]}
                                           validate={[requiredField]}/>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Field label="Текст на Английском" name="text_en" component={ATextarea}
                                           value={news.text_en}
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

                        </Form>
                    </Spin>
                </Drawer>
            </>
        </div>
    );
};

const EditedNewsForm = reduxForm({
    form: 'EditNewsForm' // a unique identifier for this form
})(EditPost)

const NewsEdit = ({selectedID, hasSelected}) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.warn('selectedID',selectedID)
        // console.warn('hasSelected',hasSelected)
    }, [selectedID, hasSelected])

    const onSubmit = async (formData) => {
        await dispatch(AuthStatus())

        if (isAuth) {
            // dispatch(EditNews(formData.name_ru, formData.name_en, formData.text_ru, formData.text_en, formData.img))
        } else {
            // dispatch(stopSubmit('NewsForm'))
        }
    }

    return <div>
        <EditedNewsForm selectedID={selectedID} hasSelected={hasSelected} onSubmit={onSubmit}/>
    </div>
}

export default NewsEdit


// TODO: Multi language form