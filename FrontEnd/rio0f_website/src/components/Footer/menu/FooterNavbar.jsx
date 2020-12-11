import React from 'react'
import styled from "styled-components";
import {Col, Menu, Row} from "antd";
import {NavLink, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const SubMenu = Menu.SubMenu;

// language=SCSS prefix=*{ suffix=}
const MenuDiv = styled.div`
    ul {
      background-color: transparent;
      border: none;
    }

    li {
      margin-bottom: 25px !important;
    }

    a, div {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      color: #FFFFFF;
    }

    .ant-menu-submenu {
      border: 1px solid transparent;
      padding-bottom: 0 !important;
    }

    .ant-menu-item, .ant-menu-item-only-child, .ant-menu-item-selected, .ant-menu-item-selected a {
      background: transparent !important;
      color: #FFFFFF !important;
    }

    .ant-menu-submenu-selected {
      border: 1px solid transparent;
      border-radius: 10px;
      border-bottom: 2px solid white !important;
      color: #FFFFFF !important;
    }

    .ant-menu-submenu-title {
      margin: 0 !important;

      &:hover {
        color: #FFFFFF !important;
      }
    }

    .ant-menu-submenu-vertical {
      border-radius: 10px;
      border-bottom: 2px solid transparent;
    }

    .ant-menu-submenu-title:active {
      background: transparent;
    }

    .ant-menu-submenu-arrow::after, .ant-menu-submenu-arrow::before {
      background: transparent !important;
    }

    .ant-menu-submenu-active {

      color: #FFFFFF !important;
      border-radius: 10px;
      border-bottom: 2px solid white !important;

      &:hover {
        color: #FFFFFF !important;

        span {
          color: #FFFFFF !important;
        }
      }
    }
`

export const FooterNavbar = () => {
    const location = useLocation();
    const {t, i18n} = useTranslation()

    return (
        <MenuDiv style={{marginTop: '25px'}}>
            <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 24}, 0]}>
                <Col>
                    <Menu mode="vertical" selectedKeys={[location.pathname]}>

                        <Menu.Item key="/">
                            <NavLink to="/">{t('navbar.main')}</NavLink>
                        </Menu.Item>

                        <Menu.Item key="/news">
                            <NavLink to="/news">{t('navbar.news')}</NavLink>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span>{t('navbar.expedition')}</span>}>
                            <Menu.Item key="/plan"><NavLink to="/plan">{t('navbar.plan')}</NavLink></Menu.Item>
                            <Menu.Item key="/team"><NavLink to="/team">{t('navbar.team')}</NavLink></Menu.Item>
                            <Menu.Item key="/hardware"><NavLink
                                to="/hardware">{t('navbar.hardware')}</NavLink></Menu.Item>
                            <Menu.Item key="/photos"><NavLink to="/gallery">{t('navbar.photos')}</NavLink></Menu.Item>
                            <Menu.Item key="/qsl"><NavLink to="/qsl">{t('navbar.qsl')}</NavLink></Menu.Item>
                            <Menu.Item key="/onlinelog"><NavLink
                                to="/onlinelog">{t('navbar.onlinelog')}</NavLink></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col>
                    <Menu mode="vertical" selectedKeys={[location.pathname]}>
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
                </Col>
            </Row>
        </MenuDiv>
    )
}