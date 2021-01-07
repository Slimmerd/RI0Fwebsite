import React from 'react';
import {Menu, Grid} from 'antd';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import Link from 'next/link'
import {useRouter} from "next/router";

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
    const {pathname} = useRouter();
    const {lg} = useBreakpoint()
    const {t} = useTranslation()

    return (
        <StyleDiv>
            <Menu mode={lg ? "horizontal" : "inline"} selectedKeys={[pathname]}>
                <Menu.Item key="/">
                    <Link href="/"><a>{t('navbar.main')}</a></Link>
                </Menu.Item>

                <Menu.Item key="/news">
                    <Link href="/news"><a>{t('navbar.news')}</a></Link>
                </Menu.Item>

                <SubMenu key="sub1" title={<span>{t('navbar.expedition')}</span>}>
                    <Menu.Item key="/plan"><Link href="/plan"><a>{t('navbar.plan')}</a></Link></Menu.Item>
                    <Menu.Item key="/team"><Link href="/team"><a>{t('navbar.team')}</a></Link></Menu.Item>
                    <Menu.Item key="/hardware"><Link href="/hardware"><a>{t('navbar.hardware')}</a></Link></Menu.Item>
                    <Menu.Item key="/photos"><Link href="/photos"><a>{t('navbar.photos')}</a></Link></Menu.Item>
                    <Menu.Item key="/qsl"><Link href="/qsl"><a>{t('navbar.qsl')}</a></Link></Menu.Item>
                    <Menu.Item key="/onlinelog"><Link
                        href="/onlinelog"><a>{t('navbar.onlinelog')}</a></Link></Menu.Item>
                </SubMenu>

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
        </StyleDiv>
    );
}

export default RightMenu;