import React, {useState, useEffect} from 'react';
import {makeField} from "../../../../utils/formHandler";
import {Button, Col, Drawer, Form, Row, Spin, Upload} from "antd";
import {InboxOutlined, PlusOutlined} from "@ant-design/icons";
import {Field, reduxForm, stopSubmit} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {AuthStatus} from "../../../../redux/auth-reducer";
import {uploadPhoto} from "../../../../redux/photo-reducer";

const {Dragger} = Upload
const ADragger = makeField(Dragger);

const UploadPhoto = (props) => {
    const {handleSubmit, submitSucceeded, pristine, reset} = props
    const fetching = useSelector((state) => state.photos.fetching)
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
            onClose()
        }
    }, [fetching, submitSucceeded])


    return (
        <div>
            <>
                <Button type="primary" onClick={showDrawer}>
                    <PlusOutlined/> Загрузить фотографии
                </Button>

                <Drawer
                    title="Загрузить фотографии"
                    width={'50%'}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{paddingBottom: 80}}
                    destroyOnClose={true}

                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={onClose} style={{marginRight: 8}}>
                                Отмена
                            </Button>
                            <Button onClick={handleSubmit} htmlType="submit" type="primary" disabled={pristine}>
                                Опубликовать
                            </Button>
                        </div>
                    }
                >
                    <Spin spinning={loading}>
                        <Form layout="vertical" hideRequiredMark style={{padding: '10px 16px'}}>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Field label="Фото" name="img" component={ADragger} type="file"
                                           beforeUpload={() => false}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined/>
                                        </p>
                                        <p className="ant-upload-text">Нажмите или перетяните файл сюда</p>
                                        <p className="ant-upload-hint">
                                            Разрешено для загрузки более одного фото
                                        </p></Field>
                                </Col>
                            </Row>
                        </Form>
                    </Spin>
                </Drawer>
            </>
        </div>
    );
};

const UploadForm = reduxForm({
    form: 'UploadForm' // a unique identifier for this form
})(UploadPhoto)

const PhotoPublish = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = async (formData) => {
        await dispatch(AuthStatus())

        if (isAuth) {
            dispatch(uploadPhoto(formData.img))
        } else {
            dispatch(stopSubmit('UploadForm'))
        }

    }

    return <div>
        <UploadForm onSubmit={onSubmit}/>
    </div>
}

export default PhotoPublish
