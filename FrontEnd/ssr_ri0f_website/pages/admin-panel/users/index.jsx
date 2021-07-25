import React, {useState} from 'react';
import {Button, Table} from 'antd';
import {DeleteOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import styled from "styled-components";
import AdminLayout from "../../../Layouts/AdminLayout";
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


const UsersList = () => {
    const [selectedRowKeys, SetSelectedRowKeys] = useState('')
    const [loading, SetLoading] = useState(false)
    const [tableLoading, SetTableLoading] = useState(false)

    const deleteButton = async () => {
        SetLoading(true)
        // await dispatch(deletePhoto(selectedRowKeys))
        // SetSelectedRowKeys('')
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
                    <Button type="primary" onClick={deleteButton} disabled={true} loading={loading}>
                        <PlusOutlined/> Добавить пользователя
                    </Button>
                    <Button type="primary" onClick={deleteButton} disabled={true} loading={loading}>
                        <EditOutlined/> Редактировать
                    </Button>
                    <Button type="primary" onClick={deleteButton} disabled={true} loading={loading}>
                        <DeleteOutlined/> Удалить
                    </Button>
                </div>

                <Table rowKey="_id" dataSource={null} bordered rowSelection={rowSelection} loading={tableLoading}
                       pagination={false}>

                    <ColumnGroup title="Имя">
                        <Column title="Русский" dataIndex="name_ru" key="name_ru" ellipsis/>
                        <Column title="Английский" dataIndex="name_en" key="name_en" ellipsis/>
                    </ColumnGroup>

                    <Column title="Email" dataIndex="email" key="email" ellipsis/>

                    <Column title="Уровень доступа" dataIndex='access' key="access" ellipsis/>

                </Table>
            </Styled>
        </>
    );
};

UsersList.layout = AdminLayout

export default UsersList;
