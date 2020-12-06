import React from 'react'
import styled from "styled-components";
import {Col, Row} from "antd";

import {Form, Input, Button} from 'antd';
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const CardShape = styled.div`
    height: 500px;
    width: 1110px;
    border-radius: 10px;
    
    margin-bottom: 134px;

    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
   
    .picture,.text{
    height: 500px;
    }
    
    .form{
    padding-top: 25px;
    background: #2C3E50;
     display: flex;
      align-items: center;
      border-radius: 10px 0 0 10px;
      Form{
      margin: 0 auto;
      
      label, button{
      font-family: Roboto,sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      }
      
      label{
      color: #FFFFFF;
      }
      
      input{
      width: 280px;
      height: 45px;
      
      background: #FFFFFF;
      border-radius: 10px;
      
      &:hover{
      border-color: #2C3E50 !important;
      }
      
      &:focus{
      border-color: #2C3E50 !important;
       box-shadow: none !important;
      }
      }
      
      .button{
      padding-top: 20px;
      }
      
      button{
      width: 220px;
      height: 64px;

      background: #FFFFFF;
      border-radius: 10px;
      
      color: #2C3E50;
       border-color: #37617e;
      &:hover {
          background-color: #37617e !important;
          border-color: #37617e !important;
           color: #FFFFFF;
           }
        }
    }
    }
    
    .text{
    background: #FFFFFF;
    border-radius: 0px 10px 10px 0px;
    color: #34495E;
    
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;

    display: flex;
    align-items: center;
    
    .header{
    color: #2C3E50;
   
    font-size: 64px;
    line-height: 75px;
    
    padding-bottom: 16px;
    }
    
    textarea{
    resize: none;
    width: 600px;
    height: 356px !important;
    border-radius: 10px;
    border-width: 2px !important;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #2C3E50;
    
    &:hover{
    border-color:rgba(44, 62, 80, 0.8);
    }
    
     &:focus{
      border-color: rgba(44, 62, 80, 0.8) !important;
      box-shadow: none !important;
      }
    }
    }
`

export const ChatPageForm = () => {
    return (
        <CardShape>
            <div className={'container'}>
                <FadeInContainer>
                <Row>
                    <Col className={'form'} span={8}>
                        <Form layout={'vertical'} size={'large'}>
                            <Form.Item label="Имя:">
                                <Input placeholder="Ваше имя"/>
                            </Form.Item>
                            <Form.Item label="Позывной:">
                                <Input placeholder="Ваш позывной"/>
                            </Form.Item>
                            <Form.Item label="Email:">
                                <Input placeholder="Ваш Email"/>
                            </Form.Item>
                            <Form.Item className={'button'}>
                                <Button type="primary">Отправить</Button>
                            </Form.Item>
                        </Form>
                    </Col>

                    <Col span={16} className={'text'}>
                        <div style={{margin: '0 auto'}}>
                            <div className={'header'}>Комментарий</div>
                            <Input.TextArea
                                placeholder="Комментарий"
                            />
                        </div>
                    </Col>
                </Row>
                </FadeInContainer>
            </div>
        </CardShape>
    )
}