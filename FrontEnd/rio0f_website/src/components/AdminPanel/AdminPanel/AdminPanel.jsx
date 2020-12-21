import React, {useState} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {CreateNews} from "../../../redux/news-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/authRedirect";
import {makeField} from "../../../utils/formHandler";

const {Dragger} = Upload

const AInput = makeField(Input);
const ATextarea = makeField(Input.TextArea);
const ADragger = makeField(Dragger);

const AdminPanel = (props) => {
    const {handleSubmit, error} = props
    const [visible, isVisible] = useState(false)

    const showDrawer = () => {
        isVisible(true)
    };

    const onClose = () => {
        isVisible(false)
    };

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
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={onClose} style={{marginRight: 8}}>
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit} htmlType="submit" type="primary">
                                Submit
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark style={{padding: '10px 16px'}}>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Field label="Название на Русском" name="name_ru" component={AInput}
                                       placeholder="Название на Русском" hasFeedback rules={[{required: true}]}/>
                            </Col>

                            <Col span={12}>
                                <Field label="Название на Английском" name="name_en" component={AInput}
                                       placeholder="Название на Английском" rules={[{required: true}]}/>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Field label="Текст на Русском" name="text_ru" component={ATextarea}
                                       placeholder="Текст новости на Русском" rules={[{required: true}]}/>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Field label="Текст на Английском" name="text_en" component={ATextarea}
                                       placeholder="Текст новости на Английском" rules={[{required: true}]}/>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Field
                                    name="img"
                                    label="Ссылка на Главное фото" component={AInput} placeholder="Please enter url"

                                />


                                {/*<Field label="Фото" name="img" component={ADragger} type="file" beforeUpload={() => false}>*/}
                                {/*    <p className="ant-upload-drag-icon">*/}
                                {/*        <InboxOutlined/>*/}
                                {/*    </p>*/}
                                {/*    <p className="ant-upload-text">Нажмите или перетяните файл сюда</p>*/}
                                {/*    <p className="ant-upload-hint">*/}
                                {/*        Разрешено для загрузки более одного фото*/}
                                {/*    </p></Field>*/}
                            </Col>
                        </Row>

                    </Form>
                </Drawer>
            </>
        </div>
    );
};

const NewsForm = reduxForm({
    form: 'NewsForm' // a unique identifier for this form
})(AdminPanel)

const NewsPublish = (props) => {
    const onSubmit = (formData) => {
        props.CreateNews(formData.name_ru, formData.name_en, formData.text_ru, formData.text_en, formData.img)
        console.log(formData)
    }

    return <div>
        <NewsForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state) => ({

})

export default compose(withAuthRedirect, connect(mapStateToProps, {CreateNews}))(NewsPublish)
