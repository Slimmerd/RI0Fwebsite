import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {Icon, InlineIcon} from '@iconify/react';
import arrowThinUp from '@iconify/icons-si-glyph/arrow-thin-up';
import {FadeInContainer} from "../../../common/FadeInAnimation";

const HeaderBlock = styled.div`
    height: 350px;
    background: #ECF0F1;
    display: flex;
    align-items: center;
    
    color: #2C3E50;
    
    .rowSize{
    width: 920px;
    margin: 0 auto;
    }
    
    .header{
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    text-align: start;
     word-break: break-word;
     white-space: normal;
    padding-bottom: 54px;
    }
    
    .sub{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: start;
    }

   @media (max-width: 1200px){
      .rowSize{
       width: 745px
      }
   }  
   
@media (max-width: 768px){
  .header{
    font-size: 36px;
    line-height: 36px;
    }
     .sub{
      font-size: 18px;
    line-height: 18px;
     }
      .rowSize{
       width: 550px
      }
}

@media (max-width: 576px){
.header{
    font-size: 28px;
    line-height: 28px;
    }
     .sub{
      font-size: 18px;
    line-height: 18px;
     }
     .rowSize{
       width: 375px
      }
}

@media (max-width: 376px){
.rowSize{
       width: 270px
      }
} 
`

export const ActualNewsPageNaming = () => {
    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <Row justify={'center'} className={'rowSize'}>
                        <Col>
                            <div className={'header'}>Команда высадилась в порту города Корсаков</div>
                            <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 0]} className={'row'} justify={'center'}>
                                <Col xs={24} sm={24} md={12}>
                                    <div className={'sub'}>Абдулахман Барбитуратов</div>
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
