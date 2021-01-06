import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FooterNavbar} from "./menu/FooterNavbar";
import SideBar from "../common/SideBar";
import {useTranslation} from "react-i18next";

const FooterContainer = styled.div`
  //height: 100%;
  height: 346px;
  background: #2C3E50;

  display: flex;
  align-items: center;
  @media (max-width: 870px) {
    height: 200px;
  }


  //Mobile menu
  .barsMenu {
    height: 64px;
    width: 64px;
    border-color: white;
    background: none;

    &:hover {
      background: hsl(210, 29%, 30%);
    }
  }

  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  @media (max-width: 992px) {

    .barsMenu {
      display: inline-block;
    }

    .superMenu {
      display: none;
    }
  }
`

const Logo = styled.div`
  height: 128px;
  width: 128px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #2C3E50;

  border-radius: 5px;


`

const LastRowText = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #FFFFFF;


`

export const Footer = () => {
    const {t} = useTranslation()

    return (
        <FooterContainer>
            <div className={'container'}>
                <Row justify="space-between" align={'middle'} gutter={[0, 24]}>
                    <Col>
                        <Logo>
                            <svg width="128" height="128" viewBox="0 0 512 512" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M262.047 275.109H222.391V354H186.812V149.25H258.812C282.438 149.25 300.672 154.547 313.516 165.141C326.359 175.734 332.781 191.062 332.781 211.125C332.781 224.812 329.453 236.297 322.797 245.578C316.234 254.766 307.047 261.844 295.234 266.812L341.219 352.172V354H303.109L262.047 275.109ZM222.391 246.562H258.953C270.953 246.562 280.328 243.562 287.078 237.562C293.828 231.469 297.203 223.172 297.203 212.672C297.203 201.703 294.062 193.219 287.781 187.219C281.594 181.219 272.312 178.125 259.938 177.938H222.391V246.562Z"
                                    fill="#ECF0F1"/>
                                <path
                                    d="M512 256C512 397.385 397.385 512 256 512C114.615 512 0 397.385 0 256C0 114.615 114.615 0 256 0C397.385 0 512 114.615 512 256ZM25.6 256C25.6 383.246 128.754 486.4 256 486.4C383.246 486.4 486.4 383.246 486.4 256C486.4 128.754 383.246 25.6 256 25.6C128.754 25.6 25.6 128.754 25.6 256Z"
                                    fill="#ECF0F1"/>
                            </svg>

                        </Logo>
                    </Col>

                    <Col>
                        <div className={'superMenu'}>
                            <FooterNavbar/>
                        </div>
                        <SideBar/>
                    </Col>
                </Row>
                <Row justify={'start'} align={'bottom'}>
                    <LastRowText>{t('dev')}</LastRowText>
                </Row>

            </div>
        </FooterContainer>
    )
}