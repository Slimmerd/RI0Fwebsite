import React, {useEffect, useState} from 'react';
import {Button, Table, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {DeleteOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {deletePost, getPosts} from "../../../redux/gallery-reducer";

import AdminLayout from "../../../Layouts/AdminLayout";
import GalleryPublish from "../../../components/AdminPanel/AdminPanel/Gallery/methods/Create/CreateGalleryPost";
import {NextSeo} from "next-seo";
import {ADMIN_SEO} from "../../../utils/SEO_headers";

const {Column, ColumnGroup} = Table;
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

const GalleryList = () => {
    const [selectedRowKeys, SetSelectedRowKeys] = useState('')
    const [loading, SetLoading] = useState(false)
    const [tableLoading, SetTableLoading] = useState(false)
    const [hasSelected, SetHasSelected] = useState(false)

    const posts = useSelector(state => state.gallery.posts)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getPosts()), [])

    useEffect(() => {

        if (posts && posts.length === 0) {
            SetTableLoading(true)
        } else SetTableLoading(false)

        if (selectedRowKeys.length > 0) {
            SetHasSelected(true)
        } else SetHasSelected(false)

    }, [selectedRowKeys.length, posts.length])

    const deleteButton = async () => {
        SetLoading(true)
        await dispatch(deletePost(selectedRowKeys))
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
                    <GalleryPublish/>
                    <Button type="primary" onClick={deleteButton} disabled={!hasSelected} loading={loading}>
                        <DeleteOutlined/> Удалить
                    </Button>
                </div>

                <Table rowKey="_id" dataSource={posts} bordered rowSelection={rowSelection} loading={tableLoading}
                       pagination={false}>

                    <ColumnGroup title="Назавание">
                        <Column title="Русский" dataIndex="name_ru" key="name_ru" ellipsis/>
                        <Column title="Английский" dataIndex="name_en" key="name_en" ellipsis/>
                    </ColumnGroup>

                    <Column title="Кол-во картинок" dataIndex="images" key="images" ellipsis
                            render={picture => (picture ? <Tag color={'green'}>{picture.length}</Tag> :
                                <Tag color={'red'}>Отсутствует</Tag>)}/>

                    <Column title="Дата" dataIndex='date' key="date" ellipsis
                            render={(date) => (moment(date).format('DD.MM.YYYY'))}/>

                </Table>
            </Styled>
        </>
    );
};

GalleryList.layout = AdminLayout

export default (GalleryList);