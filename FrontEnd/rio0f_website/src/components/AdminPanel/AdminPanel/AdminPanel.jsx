import React, {useState, useEffect} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/authRedirect";
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
import {AuthStatus, UserLogOut} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import NewsPosts from "./News/NewsPosts";
import CommentsList from "./Comments/Comments";
import PhotosList from "./UploadPhoto/PhotoList";
import GalleryList from "./Gallery/GalleryList";
import UsersList from "./Users/UsersList";
import {NavLink, Redirect, Route, Switch, useLocation} from "react-router-dom";
import Error404 from "../../common/404";

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


const AdminPanel = () => {
    const [collapsed, setCollapsed] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation();

    useEffect(() => {
        dispatch(AuthStatus())
    }, [dispatch])

    const logout = () => {
        dispatch(UserLogOut())
    }

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <LayoutStyle>
            <Layout className={'newLayout'}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="AdminLogo">RIØF</div>
                    <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>

                        <Menu.Item key="/admin/news" icon={<FormOutlined/>}>
                            <NavLink to="/admin/news">Новости</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/admin/gallery-posts" icon={<CameraOutlined/>}>
                            <NavLink to="/admin/gallery-posts">Галлерея</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/admin/photos" icon={<UploadOutlined/>}>
                            <NavLink to="/admin/photos">Фотографии</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/admin/comments" icon={<CommentOutlined/>}>
                            <NavLink to="/admin/comments">Комментарии</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/admin/users" icon={<UserOutlined/>}>
                            <NavLink to="/admin/users">Пользователи</NavLink>
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
                        <Switch>

                            <Route exact path="/admin/" render={() => <Redirect to={'/admin/news'}/>}/>

                            <Route exact path="/admin/news" render={() => <NewsPosts/>}/>
                            <Route exact path="/admin/comments" render={() => <CommentsList/>}/>
                            <Route exact path="/admin/photos" render={() => <PhotosList/>}/>
                            <Route exact path="/admin/gallery-posts" render={() => <GalleryList/>}/>
                            <Route exact path="/admin/users" render={() => <UsersList/>}/>

                            <Route render={() => <Error404/>}/>

                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </LayoutStyle>
    );
}


export default compose(withAuthRedirect)(AdminPanel)
