import React, {useState} from 'react'
import {Button, Col, Divider, Drawer, Row} from "antd";
import styled from "styled-components";
import {FooterNavbar} from "./menu/FooterNavbar";
import {MenuOutlined} from "@ant-design/icons";

const FooterContainer = styled.div`
      //height: 100%;
      height: 346px;
      background: #2C3E50;
      
      display: flex;
      align-items: center;
      @media (max-width: 870px){
      height: 200px;
      }
      
//Mobile menu
.barsMenu {
  height: 64px;
  width: 64px;
  border-color: white;
  background: none;
  
  &:hover{
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

@media (max-width: 870px) {

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
 background: #FFFFFF;
  
  display: flex;
  justify-content: center;
  align-items: center;

font-family: Roboto,sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 37px;
color: #2C3E50;
  
 
`

const LastRowText = styled.div`
  font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: #FFFFFF;


`

export const Footer = () => {
    let [mobileNavbar, setMobileNavbar] = useState(false)

    const showDrawer = () => {
        setMobileNavbar(true)
    };
    const onClose = () => {
        setMobileNavbar(false)
    };

    return (
        <FooterContainer>
            <div className={'container'}>
                <Row justify="space-between" align={'middle'} gutter={[0, 24]}>
                    <Col>
                        <Logo>Logo</Logo>
                    </Col>

                    <Col>
                        <div className={'superMenu'}>
                        <FooterNavbar/>
                        </div>
                        <Button className={'barsMenu'}  icon={<MenuOutlined style={{color: '#FFF'}}/>} type="primary" onClick={showDrawer}>
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={mobileNavbar}
                        >
                            <FooterNavbar/>
                        </Drawer>
                    </Col>
                </Row>
                <Row justify={'start'} align={'bottom'}>
                    <LastRowText>Задизайнено и разработано Даниилом Силиным</LastRowText>
                </Row>

            </div>
        </FooterContainer>
    )


}