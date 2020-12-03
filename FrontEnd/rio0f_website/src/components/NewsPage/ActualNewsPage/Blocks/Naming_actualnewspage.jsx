import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {Icon, InlineIcon} from '@iconify/react';
import arrowThinUp from '@iconify/icons-si-glyph/arrow-thin-up';
import {FadeInContainer} from "../../../../utils/FadeInAnimation";

const HeaderBlock = styled.div`
    height: 350px;
    background: #ECF0F1;
    
    display: flex;
    align-items: center;
    
    color: #2C3E50;
    
    .header{
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;
    
    padding-bottom: 24px;
    }
    
    .sub{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    }
    
    .NamingLine{
     padding-top: 65px;
    
     svg{ 
     transition: transform .4s ease-out 0s;
     }
     svg:hover{
      transform: scale(1.1);
     }
   }
    
    
`

export const ActualNewsPageNaming = () => {
    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <Row gutter={[49, 0]}>
                        <Col className={'NamingLine'}>
                            <a> <Icon icon={arrowThinUp} style={{color: '#2c3e50', fontSize: '32px'}} vFlip={true}
                                      rotate="90deg"/></a>
                        </Col>
                        <Col>
                            <div className={'header'}>Заголовок новости</div>
                            <Row gutter={[30, 0]}>
                                <Col>
                                    <div className={'sub'}>Автор Автор</div>
                                </Col>
                                <Col>
                                    <div className={'sub'}>1 Мая 2020</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </HeaderBlock>
    )
}
