import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const CardsBlockContainer = styled.div`
    min-height: 1386px;
    
    .start{
    padding-top: 140px;
    }
`

const Card = styled.div`
    width: 540px;
    height: 300px;
    background: #2C3E50;
    
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    
    position: relative;
     z-index: 2;
     
    transition: transform .4s ease-out 0s;
       &:hover{
        transform: scale(1.02);
         }
    
     @media (max-width: 576px){
    width: 375px
  }
  @media (max-width:376px){
    width: 270px
}
`

const BackNumber = styled.div`
   
    margin: 0 auto; 
    content: "1"; 
    z-index: 1;
   position: absolute;
   font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 225.19px;
    line-height: 264px;
    
    left: 35%;
    right: 35%;
    top: 6.67%;
    bottom: 3.37%;
    
    display: flex;
    justify-content: center;

    color: #FFFFFF;

    opacity: 0.07;
`

//Todo: Вынести карточку в отдельный блок

export const HardwarePageCardsBlock = () => {
    return (
        <CardsBlockContainer>
            <div className={'container'}>
                <div className={'start'}>
                    <FadeInContainer>
                        <Row  gutter={[{ xs: 0, sm: 30, md: 30, lg: 30 }, 50]} justify={'center'}>
                            <Col>
                                <Card>
                                    <div>Hello</div>
                                    <BackNumber>1</BackNumber>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div>Hello</div>
                                    <BackNumber>2</BackNumber>
                                </Card>
                            </Col>
                        </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                        <Row  gutter={[{ xs: 0, sm: 30, md: 30, lg: 30 }, 50]} justify={'center'}>
                            <Col>
                                <Card>
                                    <div>Hello</div>
                                    <BackNumber>3</BackNumber>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div>Hello</div>
                                    <BackNumber>4</BackNumber>
                                </Card>
                            </Col>
                        </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                        <Row  gutter={[{ xs: 0, sm: 30, md: 30, lg: 30 }, 50]} justify={'center'}>
                            <Col>
                                <Card>
                                    <div>Hello</div>
                                    <BackNumber>5</BackNumber>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div>Hello</div>
                                    <BackNumber>6</BackNumber>
                                </Card>
                            </Col>
                        </Row>
                    </FadeInContainer>
                </div>
            </div>
        </CardsBlockContainer>
    )
}