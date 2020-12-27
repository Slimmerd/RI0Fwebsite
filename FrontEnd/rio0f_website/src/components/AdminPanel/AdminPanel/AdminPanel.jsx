import React, {useState, useEffect} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/authRedirect";
import styled from "styled-components";
import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {AuthStatus} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import NewsPosts from "./News/NewsPosts";
import CommentsList from "./Comments/Comments";
import PhotosList from "./UploadPhoto/PhotoList";

const {Header, Sider, Content} = Layout;

const LayoutStyle = styled.div`
  .site-layout .site-layout-background {
    background: #fff;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .AdminLogo {
    height: 32px;
    //background: rgba(255, 255, 255, 0.3);
    margin: 16px;
    font-size: 28px;
    color: #ECF0F1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .newLayout {
    min-height: 100vh;
  }
`


const AdminPanel = () => {
    const [collapsed, setCollapsed] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AuthStatus())
    }, [dispatch])


    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <LayoutStyle>
            <Layout className={'newLayout'}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="AdminLogo">RIØF</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            Главная
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            Новости
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            Фотографии
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UploadOutlined/>}>
                            Комментарии
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UploadOutlined/>}>
                            Пользователи
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24
                        }}
                    >
                        {/*<NewsPublish/>*/}
                        {/*<PhotoPublish/>*/}
                        {/*<NewsPosts/>*/}
                        {/*<CommentsList/>*/}
                        <PhotosList/>
                    </Content>
                </Layout>
            </Layout>
        </LayoutStyle>
    );
}


export default compose(withAuthRedirect)(AdminPanel)
