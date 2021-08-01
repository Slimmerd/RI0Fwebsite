import React, {useEffect, useState} from 'react';
import {Button, Table} from "antd";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deletePhoto, getPhotos} from "../../../redux/photo-reducer";
import PhotoPublish from "../../../components/AdminPanel/AdminPanel/UploadPhoto/UploadPhoto";
import {DeleteOutlined} from "@ant-design/icons";
import AdminLayout from "../../../Layouts/AdminLayout";
import {NextSeo} from "next-seo";
import {ADMIN_SEO} from "../../../utils/SEO_headers";

const {Column} = Table;
const Styled = styled.div`

  .buttons {
    display: flex;
    justify-content: flex-start;

    Button {
      margin: 10px 10px 10px 0
    }
  }

  .ant-btn > .ant-btn-loading-icon .anticon {
    padding-right: 0 !important;
  }

  .ant-btn-loading-icon {
    padding-right: 10px !important;
  }
`


const PhotosList = () => {
    const [selectedRowKeys, SetSelectedRowKeys] = useState('')
    const [loading, SetLoading] = useState(false)
    const [tableLoading, SetTableLoading] = useState(false)
    const [hasSelected, SetHasSelected] = useState(false)

    const pictures = useSelector(state => state.photos.photos)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getPhotos()), [])

    useEffect(() => {

        if (pictures && pictures.length === 0) {
            SetTableLoading(true)
        } else SetTableLoading(false)

        if (selectedRowKeys.length > 0) {
            SetHasSelected(true)
        } else SetHasSelected(false)

    }, [selectedRowKeys.length, pictures.length])


    const deleteButton = async () => {
        SetLoading(true)
        await dispatch(deletePhoto(selectedRowKeys))
        SetSelectedRowKeys('')
        SetLoading(false)
    }

    const onSelectChange = (selectedRowKeys) => {
        SetSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        type: 'radio',
    };

    return (
        <>
            <NextSeo {...ADMIN_SEO}/>
            <Styled>
                <div className={'buttons'}>
                    <PhotoPublish/>
                    <Button type="primary" onClick={deleteButton} disabled={!hasSelected} loading={loading}>
                        <DeleteOutlined/> Удалить
                    </Button>
                </div>

                <Table rowKey="_id" dataSource={pictures} bordered rowSelection={rowSelection} loading={tableLoading}
                       pagination={false}>

                    <Column title="Сссылка" dataIndex="_id" key="_id" ellipsis/>

                    <Column title="Предпросмотр" dataIndex="_id" key="img" ellipsis
                            render={(_id) => <img src={process.env.REACT_APP_BACKEND_ADDRESS + "photos/" + _id}
                                                  width={250} alt=""/>}/>

                    <Column title="Дата" dataIndex='date' key="date" ellipsis
                            render={(date) => new Date(date).toLocaleDateString('ru-ru')}/>

                </Table>
            </Styled>
        </>
    );
};

PhotosList.layout = AdminLayout

export default PhotosList;