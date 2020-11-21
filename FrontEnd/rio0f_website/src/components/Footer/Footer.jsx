import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FooterNavbar} from "./menu/FooterNavbar";

const FooterContainer = styled.div`
      //height: 100%;
      height: 346px;
      background: #2C3E50;
      
      display: flex;
      align-items: center;
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
    return (
        <FooterContainer>
            <div className={'container'}>
                <Row justify="space-between" align={'middle'} gutter={[0, 24]}>
                    <Col>
                        <Logo>Logo</Logo>
                    </Col>

                    <Col>
                        <FooterNavbar/>
                    </Col>
                </Row>
                <Row justify={'start'} align={'bottom'}>
                    <LastRowText>Задизайнено и разработано Даниилом Силиным</LastRowText>
                </Row>

            </div>
        </FooterContainer>
    )


}