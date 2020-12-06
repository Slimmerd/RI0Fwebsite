import React, {useEffect} from 'react'
import styled from "styled-components";
import {Col, Menu, Row, Grid} from "antd";
import {NavLink, useLocation} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

 const MenuDiv = styled.div`
    ul{
    background-color: transparent;
    border: none;
    }
    
    li{
     margin-bottom: 25px !important;
    }
    
    a, div {
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    
    color: #FFFFFF;
    }
    
    .ant-menu-item, .ant-menu-item-only-child, .ant-menu-item-selected, .ant-menu-item-selected a{
    background: transparent !important;
    color: #FFFFFF !important;
    }
    
    .ant-menu-submenu-selected{
    border-radius: 10px;
      border-bottom: 2px solid white !important;
       color: #FFFFFF !important;
     
       
    }
    .ant-menu-submenu-title:hover{
     color: #FFFFFF !important;
    }
    
    .ant-menu-submenu-vertical{
      border-radius: 10px;
      border-bottom: 2px solid transparent ;
    }
     .ant-menu-submenu-title:active{
     background: transparent;
     }
     
     .ant-menu-submenu-arrow::after, .ant-menu-submenu-arrow::before{
      background: transparent !important;
     }
     
    .ant-menu-submenu-active{
        color: #FFFFFF !important;
        border-radius: 10px;
         border-bottom: 2px solid white !important;
     &:hover{
     color: #FFFFFF !important;
     
     span{
      color: #FFFFFF !important;
     }
     }
     
     
     
     
     
}
`

export const FooterNavbar = () => {
    const location = useLocation();

        // useEffect(() => {
        //     window.scrollTo(0, 0);
        // }, [location.pathname]);

    return (
        <MenuDiv style={{marginTop: '25px'}} >
        <Row gutter={[24, 0]}>
            <Col >
            <Menu mode="vertical" selectedKeys={[location.pathname]}>

                <Menu.Item key="/">
                    <NavLink to="/" >Главная</NavLink>
                </Menu.Item>

                <Menu.Item key="/news">
                    <NavLink to="/news">Новости</NavLink>
                </Menu.Item>

                <SubMenu key="sub1" title={<span>Экспедиция</span>}>
                    <Menu.Item  key="/plan"><NavLink to="/plan">План</NavLink></Menu.Item>
                    <Menu.Item key="/team"><NavLink to="/team">Команда</NavLink></Menu.Item>
                    <Menu.Item key="/hardware"><NavLink to="/hardware">Железо</NavLink></Menu.Item>
                    <Menu.Item key="/gallery"><NavLink to="/gallery">Фотоальбом</NavLink></Menu.Item>
                    <Menu.Item key="/qsl"><NavLink to="/qsl">QSL</NavLink></Menu.Item>
                    <Menu.Item key="/onlinelog"><NavLink to="/onlinelog">Online Log</NavLink></Menu.Item>
                </SubMenu>
            </Menu>
            </Col>
            <Col>
            <Menu mode="vertical" selectedKeys={[location.pathname]}>
                <Menu.Item key="/donate">
                    <NavLink to="/donate">Пожертвования</NavLink>
                </Menu.Item>

                <Menu.Item key="/chat">
                    <NavLink to="/chat">Общение</NavLink>
                </Menu.Item>

                <Menu.Item key="/contacts">
                    <NavLink to="/contacts">Контакты</NavLink>
                </Menu.Item>
            </Menu>
            </Col>
        </Row>
        </MenuDiv>
    )
}