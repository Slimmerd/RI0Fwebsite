import React from 'react';
import {Menu, Grid} from 'antd';
import {NavLink, useLocation} from "react-router-dom";
import styled from "styled-components";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {useBreakpoint} = Grid;

const StyleDiv = styled.div`

  .ant-menu-item-selected{
  border-bottom: 2px solid white !important;
  color: #2C3E50 !important;
  
  &:hover{
  border-bottom: 2px solid transparent !important;
  }
  }
    
  .ant-menu-item{
   border-radius: 10px;
   border-bottom: 2px solid transparent;
 
  &:hover{
  background: #2C3E50;
  border-bottom: 2px solid white !important;
  }
  a:hover{  color: white !important;}
    }
  
    .ant-menu-submenu{
    border-radius: 10px;
    &:hover{
    border-bottom: 2px solid white !important;
    }}
    
     .ant-menu-submenu-title{
     color: white !important;
     }
    .ant-menu-submenu-active{ 
     background: #2C3E50;
     border-bottom: 2px solid white !important;
     span:hover{  color: white !important;}
        }
        
    .ant-menu-submenu-selected{
     border-bottom: 2px solid white !important;
    }
              
`

const RightMenu = () => {
    const location = useLocation();
    const {md} = useBreakpoint()

    return (
        <StyleDiv>
            <Menu mode={md ? "horizontal" : "inline"} selectedKeys={[location.pathname]}>
                <Menu.Item key="/">
                    <NavLink exact to="/">Главная</NavLink>
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
        </StyleDiv>
    );
}

export default RightMenu;