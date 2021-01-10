import React, {useState, useEffect} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/authRedirect";
import styled from "styled-components";
import {Layout, Menu, Button, Row, Col} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FormOutlined,
    CameraOutlined,
    UploadOutlined,
    CommentOutlined,
    UserOutlined
} from '@ant-design/icons';
import {AuthStatus, UserLogOut} from "../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import Link from 'next/link'
import Loading from "../components/common/Loading";
import "../styles/antd-custom.less";

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


const AdminLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false)
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const {pathname} = useRouter()

    useEffect(() => {
        dispatch(AuthStatus())
    }, [dispatch])

    const logout = () => {
        dispatch(UserLogOut())
    }

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    if (!isAuth) {
        return (
            <Loading/>
        )
    }

    return (
        <LayoutStyle>
            <Layout className={'newLayout'}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="AdminLogo">RIØF</div>
                    <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>

                        <Menu.Item key="/admin-panel/news" icon={<FormOutlined/>}>
                            <Link href="/admin-panel/news"><a>Новости</a></Link>
                        </Menu.Item>
                        <Menu.Item key="/admin-panel/gallery-posts" icon={<CameraOutlined/>}>
                            <Link href="/admin-panel/gallery-posts"><a>Галлерея</a></Link>
                        </Menu.Item>
                        <Menu.Item key="/admin-panel/photos" icon={<UploadOutlined/>}>
                            <Link href="/admin-panel/photos"><a>Фотографии</a></Link>
                        </Menu.Item>
                        <Menu.Item key="/admin-panel/comments" icon={<CommentOutlined/>}>
                            <Link href="/admin-panel/comments"><a>Комментарии</a></Link>
                        </Menu.Item>
                        <Menu.Item key="/admin-panel/users" icon={<UserOutlined/>}>
                            <Link href="/admin-panel/users"><a>Пользователи</a></Link>
                        </Menu.Item>
                    </Menu>

                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <Row>
                            <Col xs={14} sm={16} md={18} lg={20} xl={22}>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: toggle,
                                })}
                            </Col>
                            <Col xs={10} sm={8} md={6} lg={4} xl={2}>
                                <Button onClick={logout}>Выйти</Button>
                            </Col>
                        </Row>
                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </LayoutStyle>
    );
}

export default compose(withAuthRedirect)(AdminLayout)
