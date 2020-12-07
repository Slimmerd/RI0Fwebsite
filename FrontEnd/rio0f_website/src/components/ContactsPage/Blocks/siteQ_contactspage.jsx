import {Col, Row, Button} from "antd";
import styled from "styled-components";
import React from 'react'
import {Icon, InlineIcon} from '@iconify/react';
import book from '@iconify/icons-si-glyph/book-';
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const BlockHeader = styled.div`
  background: #ECF0F1;
   box-shadow: 0px 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);
  min-height: 431px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #2C3E50;
  
  .picture{
  padding: 45px 0 25px 0;
  }
  
  .header{
  font-size: 36px;
  line-height: 42px;
  
  padding-bottom: 66px;
  }
  
  .name{
  font-size: 24px;
  line-height: 28px;
  
  padding-bottom: 35px;
  }
  
  .email{
  font-size: 20px;
  line-height: 28px;
  padding-bottom: 45px;
  }
`

export const ContactPageSiteQ = () => {
    return (
        <BlockHeader>
            <div className={'container'}>
            <FadeInContainer>
                <div className={'picture'}>
                    <Icon icon={book} style={{color: '#2c3e50', fontSize: '64px'}} />
                </div>

                <div className={'header'}>По вопросам работы сайта</div>

                <div className={'name'}>Иван Иванов Иванович</div>
                <Row className={'email'} justify={'center'}>
                    <Col>Email:</Col>
                    <Col>
                        <div>vasya.pupkin@ri0f.com</div>
                        <div style={{paddingLeft: '18px'}}>vasya.pupkin@gmail.com</div>
                    </Col>
                </Row>
            </FadeInContainer>
            </div>
        </BlockHeader>
    )
}