import React from 'react'
import styled from "styled-components";
import {Col, Menu, Row, Grid} from "antd";
import {NavLink} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {useBreakpoint} = Grid;


const MenuStyle = {

    backgroundColor: 'transparent',
    border: 'none',
    color: '#FFFFFF'
};

const MenuItem = {
    marginBottom: '25px',
    color: '#FFFFFF'
}


const LinkStyle = {
    fontFamily: 'Roboto,sans-serif',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '28px',
    color: '#FFFFFF !important'

}

 const Gay = styled.div`
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

`


export const FooterNavbar = () => {
    return (
        <Gay style={{marginTop: '25px'}} >
        <Row gutter={[24, 0]}>
            <Col >
            <Menu mode="vertical">


                <Menu.Item key="mainpage">
                    {/*<a style={LinkStyle} href="">Главная</a>*/}
                    <NavLink to="/profile" >Главная</NavLink>

                </Menu.Item>

                <Menu.Item key="newspage">
                    <a href="">Новости</a>
                </Menu.Item>

                <SubMenu key="sub1" title={<span>Экспедиция</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
            </Col>
            <Col>
            <Menu mode="vertical">
                <Menu.Item key="donationpage">
                    <a href="">Пожертвования</a>
                </Menu.Item>

                <Menu.Item key="chatpage">
                    <a  href="">Общение</a>
                </Menu.Item>

                <Menu.Item key="contactpage">
                    <a href="">Контакты</a>
                </Menu.Item>

            </Menu>
            </Col>
        </Row>
        </Gay>
    )
}