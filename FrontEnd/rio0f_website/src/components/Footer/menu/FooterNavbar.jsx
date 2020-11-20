import React from 'react'
import styled from "styled-components";
import {Col, Menu, Row,Grid} from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {useBreakpoint} = Grid;


export const FooterNavbar = () =>{
    const {md} = useBreakpoint()
    return(
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="mainpage">
                <a href="">Главная</a>
            </Menu.Item>

            <Menu.Item key="newspage">
                <a href="">Новости</a>
            </Menu.Item>

            <SubMenu  key="sub1" title={<span>Экспедиция</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>

            <Menu.Item key="donationpage">
                <a href="">Пожертвования</a>
            </Menu.Item>

            <Menu.Item key="chatpage">
                <a href="">Общение</a>
            </Menu.Item>

            <Menu.Item key="contactpage">
                <a href="">Контакты</a>
            </Menu.Item>
        </Menu>

    )
}