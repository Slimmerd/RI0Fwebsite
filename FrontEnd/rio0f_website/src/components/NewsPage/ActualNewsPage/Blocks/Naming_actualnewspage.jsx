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
 @media (max-width: 768px){
 .header{
    font-size: 76px;
    line-height: 76px;
  }
  .row{
  justify-content: center;
  }
  .NamingLine{
     padding-top: 0px;
     }
  a{
  display: none;
  svg{display: none}
  }
}

@media (max-width: 576px){
 .text{
    
  }
}

@media (max-width: 360px){
 .header{
    font-size: 56px;
    line-height: 56px;
  }
}
    
`

export const ActualNewsPageNaming = () => {
    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <Row gutter={[{ xs: 0, sm: 49, md: 49, lg: 49 }, 0]} >
                        <Col className={'NamingLine'}>
                            <a> <Icon icon={arrowThinUp} style={{color: '#2c3e50', fontSize: '32px'}} vFlip={true}
                                      rotate="90deg"/></a>
                        </Col>
                        <Col>
                            <div className={'header'}>Заголовок новости</div>
                            <Row gutter={[{ xs: 0, sm: 30, md: 30, lg: 30 }, 0]} className={'row'}>
                                <Col xs={24} sm={24} md={12}>
                                    <div className={'sub'}>Автор Автор</div>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
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
