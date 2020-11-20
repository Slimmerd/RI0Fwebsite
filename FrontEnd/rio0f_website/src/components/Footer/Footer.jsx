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



export const Footer = () =>{
    return(
        <FooterContainer>
            <div className={'container'}>
                <Row justify="space-between">
                    <Col>
                        <Logo>Logo</Logo>
                    </Col>

                    <Col>
                       <FooterNavbar/>
                    </Col>
                </Row>





                <div>Задизайнено и разработано Даниилом Силином</div>


            </div>
        </FooterContainer>
    )



}