import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import cameraIcon from "@iconify/icons-si-glyph/camera";

const CardShape = styled.div`
    width: 1110px;
    height: 550px;
    
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    
    .left,.right{
    height: 550px;
    }
    
    
    .left{
    background: #2C3E50;
      border-radius: 15px 0px 0px 15px;
    
     display: flex;
      align-items: center;
      svg{
      margin: 0 auto;
      }
      
    }
    
    .right{
    background: #FFFFFF;
    border-radius: 0px 15px 15px 0px;
    
    }
    
 `
 const SmallerCard= styled.div` 
     
     .header,.information{
    text-align: left;
    }
    
    .header{
    
    padding: 19px 0 10px 0;
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;
    margin-left: 90px;
    
    color: #2C3E50;

    }
    
    
    .information{
      background: #2C3E50;
      border-radius: 15px;
      width: 505px;
      height: 365px;
      margin: 0 auto;
     
    }
      
    .text{
    
     font-family: Roboto,sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
        line-height: 84px;
        width: 465px;
        height: 365px;
        color: #ECF0F1;
        word-break: break-word;
        white-space: normal;
      margin: 0 auto;
      
       display: flex;
      align-items: flex-end;
      
      }
      
      
    
`


export const TeamMemberCard = () => {
    return (
        <div>
            <CardShape>
                <Row>
                    <Col className={'left'} span={9}>
                        <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '165px'}}/>
                    </Col>
                    <Col className={'right'} span={15}>
                        <SmallerCard >
                            <div style={{margin: '0 auto'}}>
                        <div className={'header'}>R6RR</div>
                        <div className={'information'}>
                            <div style={{margin: '0 auto'}}>
                            <div className={'text'}>Биография и Отвественность</div>
                            </div>
                        </div>
                            </div>
                        </SmallerCard>

                    </Col>
                </Row>
            </CardShape>
        </div>
    )
}