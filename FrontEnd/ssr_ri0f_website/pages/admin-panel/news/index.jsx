import React, {useState, useEffect, useMemo} from 'react';
import {Button, Table, Tag} from "antd";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {DeleteNews, getNews} from "../../../redux/news-reducer";
import {getNames} from "../../../redux/actNews-reducer";
import NewsPublish from "../../../components/AdminPanel/AdminPanel/News/CreatePost/CreatePost";
import NewsEdit from "../../../components/AdminPanel/AdminPanel/News/EditPost";
import {DeleteOutlined} from "@ant-design/icons";
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

const NewsPosts = () => {
    const [selectedRowKeys, SetSelectedRowKeys] = useState('')
    const [loading, SetLoading] = useState(false)
    const [tableLoading, SetTableLoading] = useState(false)
    const [hasSelected, SetHasSelected] = useState(false)

    const news = useSelector(state => state.newsPage.news)
    const actNews = useSelector(state => state.actNewsPage.author_ru)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getNews()), [])

    useEffect(() => {
        if (news && news.length === 0) {
            SetTableLoading(true)
        } else SetTableLoading(false)

        if (selectedRowKeys.length > 0) {
            SetHasSelected(true)
        } else SetHasSelected(false)

    }, [selectedRowKeys.length, news.length])

    const GetNames = (author) => useMemo(() => dispatch(getNames(author)), [author])

    const deleteButton = async () => {
        SetLoading(true)
        await dispatch(DeleteNews(selectedRowKeys))
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
                    <NewsPublish/>
                    <NewsEdit hasSelected={hasSelected} selectedID={selectedRowKeys}/>
                    <Button type="primary" onClick={deleteButton} disabled={!hasSelected} loading={loading}>
                        <DeleteOutlined/> Удалить
                    </Button>
                </div>

                <Table rowKey="url" dataSource={news} bordered rowSelection={rowSelection} loading={tableLoading}
                       pagination={false}>
                    <ColumnGroup title="Назавание">
                        <Column title="Русский" dataIndex="name_ru" key="name_ru" ellipsis/>
                        <Column title="Английский" dataIndex="name_en" key="name_en" ellipsis/>
                    </ColumnGroup>

                    <ColumnGroup title="Текст">
                        <Column title="Русский" dataIndex="text_ru" key="text_ru" ellipsis/>
                        <Column title="Английский" dataIndex="text_en" key="text_en" ellipsis/>
                    </ColumnGroup>

                    <Column title="Фото" dataIndex="img" key="img" ellipsis
                            render={picture => (picture ? <Tag color={'green'}>Присутствует</Tag> :
                                <Tag color={'red'}>Отсутствует</Tag>)}/>

                    {/*            Could take lots of resources....*/}
                    <Column title="Автор" dataIndex="author" key="author" ellipsis
                            render={author => (GetNames(author), actNews)}/>

                    <Column title="Дата" dataIndex='date' key="date" ellipsis
                            render={(date) => new Date(date).toLocaleDateString('ru-ru')}/>

                </Table>
            </Styled>
        </>
    );
};

NewsPosts.layout = AdminLayout

export default NewsPosts;