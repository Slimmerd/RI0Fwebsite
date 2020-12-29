import React, {useEffect, useState} from 'react';
import {Button, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import styled from "styled-components";
import {deleteComment, getComments} from "../../../../redux/chat-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../HOC/authRedirect";

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


const CommentsList = () => {
    const [selectedRowKeys, SetSelectedRowKeys] = useState('')
    const [loading, SetLoading] = useState(false)
    const [tableLoading, SetTableLoading] = useState(false)
    const [hasSelected, SetHasSelected] = useState(false)

    const comments = useSelector((state) => state.chat.comments)
    const dispatch = useDispatch()


    useEffect(() => dispatch(getComments()), [])

    useEffect(() => {
        if (comments && comments.length === 0) {
            SetTableLoading(true)
        } else SetTableLoading(false)

        if (selectedRowKeys.length > 0) {
            SetHasSelected(true)
        } else SetHasSelected(false)

    }, [selectedRowKeys.length, comments.length])


    const deleteButton = async () => {
        SetLoading(true)
        await dispatch(deleteComment(selectedRowKeys))
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
        <Styled>
            <div className={'buttons'}>
                <Button type="primary" onClick={deleteButton} disabled={!hasSelected} loading={loading}>
                    Удалить
                </Button>
            </div>

            <Table rowKey="_id" dataSource={comments} bordered rowSelection={rowSelection} loading={tableLoading}
                   pagination={false}>

                <Column title="Имя" dataIndex="name" key="name" ellipsis/>

                <Column title="Позывной" dataIndex="call" key="call" ellipsis/>

                <Column title="Email" dataIndex="email" key="email" ellipsis/>

                <Column title="Текст" dataIndex="text" key="text" ellipsis/>

                <Column title="Дата" dataIndex='date' key="date" ellipsis
                        render={(date) => (moment(date).format('DD.MM.YYYY'))}/>

            </Table>
        </Styled>
    );
};

export default compose(withAuthRedirect)(CommentsList);
