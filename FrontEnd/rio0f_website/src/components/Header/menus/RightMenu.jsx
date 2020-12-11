import React from 'react';
import {Menu, Grid} from 'antd';
import {NavLink, useLocation} from "react-router-dom";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const SubMenu = Menu.SubMenu;
const {useBreakpoint} = Grid;

// language=SCSS prefix=*{ suffix=}
const StyleDiv = styled.div`

    .ant-menu-item-selected {
      border-bottom: 2px solid white !important;
      color: #2C3E50 !important;

      &:hover {
        border-bottom: 2px solid transparent !important;
      }
    }

    .ant-menu-item {
      border-radius: 10px;
      border-bottom: 2px solid transparent;

      &:hover {
        background: #2C3E50;
        border-bottom: 2px solid white !important;

      }

      a:hover {
        color: white !important;
      }
    }

    .ant-menu-submenu {
      border: 1px solid transparent;
      border-radius: 10px;
      border-bottom: 2px solid transparent !important;

      &:hover {
        border-bottom: 2px solid white !important;
      }
    }

    .ant-menu-submenu-title {
      color: white !important;
    }

    .ant-menu-submenu-active {
      background: #2C3E50;
      border-bottom: 2px solid white !important;

      span:hover {
        color: white !important;
      }
    }

    .ant-menu-submenu-selected {
      border-bottom: 2px solid white !important;
      border-radius: 10px;
    }

    @media (max-width: 992px) {
      ul {
        padding-top: 25px;
        background-color: transparent;
        border: none;
      }

      li {
        margin-bottom: 15px !important;
      }

      a, div {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #FFFFFF !important;
      }

      .ant-menu-submenu-arrow::after, .ant-menu-submenu-arrow::before {
        background: white !important;

      }

      .ant-menu-submenu-title:active {
        background: transparent;
      }

      .ant-menu-submenu-inline {
        border-radius: 10px;
        border-bottom: 2px solid transparent;
      }

      .ant-menu-item, .ant-menu-item-only-child, .ant-menu-item-selected, .ant-menu-item-selected a {
        background: transparent !important;
        color: #FFFFFF !important;
      }

    }

`

const RightMenu = () => {
    const location = useLocation();
    const {lg} = useBreakpoint()
    const {t, i18n} = useTranslation()

    return (
        <StyleDiv>
            <Menu mode={lg ? "horizontal" : "inline"} selectedKeys={[location.pathname]}>
                <Menu.Item key="/">
                    <NavLink exact to="/">{t('navbar.main')}</NavLink>
                </Menu.Item>

                <Menu.Item key="/news">
                    <NavLink to="/news">{t('navbar.news')}</NavLink>
                </Menu.Item>

                <SubMenu key="sub1" title={<span>{t('navbar.expedition')}</span>}>
                    <Menu.Item key="/plan"><NavLink to="/plan">{t('navbar.plan')}</NavLink></Menu.Item>
                    <Menu.Item key="/team"><NavLink to="/team">{t('navbar.team')}</NavLink></Menu.Item>
                    <Menu.Item key="/hardware"><NavLink to="/hardware">{t('navbar.hardware')}</NavLink></Menu.Item>
                    <Menu.Item key="/photos"><NavLink to="/photos">{t('navbar.photos')}</NavLink></Menu.Item>
                    <Menu.Item key="/qsl"><NavLink to="/qsl">{t('navbar.qsl')}</NavLink></Menu.Item>
                    <Menu.Item key="/onlinelog"><NavLink to="/onlinelog">{t('navbar.onlinelog')}</NavLink></Menu.Item>
                </SubMenu>

                <Menu.Item key="/donate">
                    <NavLink to="/donate">{t('navbar.donate')}</NavLink>
                </Menu.Item>

                <Menu.Item key="/chat">
                    <NavLink to="/chat">{t('navbar.chat')}</NavLink>
                </Menu.Item>

                <Menu.Item key="/contacts">
                    <NavLink to="/contacts">{t('navbar.contacts')}</NavLink>
                </Menu.Item>
            </Menu>
        </StyleDiv>
    );
}

export default RightMenu;