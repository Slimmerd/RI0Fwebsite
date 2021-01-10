import React from 'react';
import {Grid, Menu} from 'antd';
import styled from "styled-components";
import Cookies from "js-cookie";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Super = styled.div`
  .ant-menu-item-selected {
    border-bottom: 2px solid white !important;
    color: white !important;

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


  @media (max-width: 992px) {
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

      color: #FFFFFF !important;
    }

    .ant-menu-item, .ant-menu-item-only-child, .ant-menu-item-selected, .ant-menu-item-selected a {
      background: transparent !important;
      color: #FFFFFF !important;
    }

  }
`

const {useBreakpoint} = Grid;

const LeftMenu = () => {
    const router = useRouter()
    const {lg} = useBreakpoint();
    const {lang} = useTranslation();

    const changeLanguage = (lng) => {
        Cookies.set('NEXT_LOCALE', `${lng}`);
    };

    return (
        <Super>
            <Menu mode={lg ? "horizontal" : "inline"} selectedKeys={lang}>
                <Menu.Item key="ru">
                    <Link href={router.asPath} locale={'ru'} key={'ru'}>
                        <a onClick={() => changeLanguage('ru')}>RU</a>
                    </Link>

                </Menu.Item>
                <Menu.Item key="en">
                    <Link href={router.asPath} locale={'en'} key={'en'}>
                        <a onClick={() => changeLanguage('en')}>EN</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </Super>
    );
}

export default LeftMenu;