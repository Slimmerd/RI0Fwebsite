import React from 'react'
import styled from "styled-components";
import {Col, Menu, Row} from "antd";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import {useRouter} from "next/router";

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
    const {pathname} = useRouter();
    const {t} = useTranslation('basic')

    return (
        <MenuDiv style={{marginTop: '25px'}}>
            <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 24}, 0]}>
                <Col>
                    <Menu mode="vertical" selectedKeys={[pathname]}>

                        <Menu.Item key="/">
                            <Link href="/"><a>{t('navbar.main')}</a></Link>
                        </Menu.Item>

                        <Menu.Item key="/news">
                            <Link href="/news"><a>{t('navbar.news')}</a></Link>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span>{t('navbar.expedition')}</span>}>
                            <Menu.Item key="/plan">
                                <Link href="/plan"><a>{t('navbar.plan')}</a></Link>
                            </Menu.Item>
                            <Menu.Item key="/team">
                                <Link href="/team"><a>{t('navbar.team')}</a></Link>
                            </Menu.Item>
                            <Menu.Item key="/hardware">
                                <Link href="/hardware">{t('navbar.hardware')}</Link>
                            </Menu.Item>
                            <Menu.Item key="/photos">
                                <Link href="/photos"><a>{t('navbar.photos')}</a></Link>
                            </Menu.Item>
                            <Menu.Item key="/qsl">
                                <Link href="/qsl"><a>{t('navbar.qsl')}</a></Link>
                            </Menu.Item>
                            <Menu.Item key="/onlinelog"><Link
                                href="/onlinelog"><a>{t('navbar.onlinelog')}</a></Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col>
                    <Menu mode="vertical" selectedKeys={[pathname]}>
                        <Menu.Item key="/donate">
                            <Link href="/donate"><a>{t('navbar.donate')}</a></Link>
                        </Menu.Item>

                        <Menu.Item key="/chat">
                            <Link href="/chat"><a>{t('navbar.chat')}</a></Link>
                        </Menu.Item>

                        <Menu.Item key="/contacts">
                            <Link href="/contacts"><a>{t('navbar.contacts')}</a></Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </MenuDiv>
    )
}