import React, {useEffect, useState} from 'react';
import {Button, Table, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {DeleteOutlined} from "@ant-design/icons";
import styled from "styled-components";
import AdminLayout from "../../../Layouts/AdminLayout";
import {NextSeo} from "next-seo";
import {ADMIN_SEO} from "../../../utils/SEO_headers";
import DonaterPublish from "../../../components/AdminPanel/AdminPanel/Donaters/CreateDonater";
import {deleteSponsor, getSponsors} from "../../../redux/sponsors-reducer";

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

const SponsorsList = () => {
    const [selectedRowKeys, SetSelectedRowKeys] = useState('')
    const [loading, SetLoading] = useState(false)
    const [tableLoading, SetTableLoading] = useState(false)
    const [hasSelected, SetHasSelected] = useState(false)

    const sponsors = useSelector(state => state.sponsors.posts)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getSponsors()), [])

    useEffect(() => {

        if (sponsors && sponsors.length === 0) {
            SetTableLoading(true)
        } else SetTableLoading(false)

        if (selectedRowKeys.length > 0) {
            SetHasSelected(true)
        } else SetHasSelected(false)

    }, [selectedRowKeys.length, sponsors.length])

    const deleteButton = async () => {
        SetLoading(true)
        await dispatch(deleteSponsor(selectedRowKeys))
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
                    <DonaterPublish/>
                    <Button type="primary" onClick={deleteButton} disabled={!hasSelected} loading={loading}>
                        <DeleteOutlined/> Удалить
                    </Button>
                </div>

                <Table rowKey="_id" dataSource={sponsors} bordered rowSelection={rowSelection} loading={tableLoading}
                       pagination={false}>

                    <Column title="Спонсор" dataIndex="name" key="name" ellipsis/>

                    <Column title="Картинка" dataIndex="img" key="img" ellipsis
                            render={picture => (picture ? <Tag color={'green'}>Есть</Tag> :
                                <Tag color={'red'}>Отсутствует</Tag>)}/>

                    <Column title="Категория" dataIndex='category' key="category" ellipsis/>

                </Table>
            </Styled>
        </>
    );
};

SponsorsList.layout = AdminLayout

export default (SponsorsList);