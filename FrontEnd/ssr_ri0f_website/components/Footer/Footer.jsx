import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FooterNavbar} from "./menu/FooterNavbar";
import SideBar from "../common/SideBar";
import useTranslation from 'next-translate/useTranslation'
import Image from "next/image"

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

  @media (max-width: 320px) {
    height: 96px;
    width: 96px;
  }


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
    const {t} = useTranslation('basic')

    return (
        <FooterContainer>
            <div className={'container'}>
                <Row justify="space-between" align={'middle'} gutter={[0, 24]}>
                    <Col>
                        <Logo>
                            <Image src={"/static/assets/newLogo.png"} width={128}
                                   height={128} priority quality={90}/>

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