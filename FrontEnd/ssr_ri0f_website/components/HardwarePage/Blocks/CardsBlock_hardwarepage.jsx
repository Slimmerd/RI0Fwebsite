import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../common/FadeInAnimation";
import {HardwarePageCard} from "./Card_hardwarepage";

// language=SCSS prefix=*{ suffix=}
const CardsBlockContainer = styled.div`
  min-height: 925px;

  .start {
    padding-top: 140px;
    padding-bottom: 90px;
  }
`

export const HardwarePageCardsBlock = () => {
    return (
        <CardsBlockContainer>
            <div className={'container'}>
                <div className={'start'}>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard cardNumber={1}/>
                            </Col>
                            <Col>
                                <HardwarePageCard cardNumber={2}/>
                            </Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard cardNumber={3}/>
                            </Col>
                            <Col>
                                <HardwarePageCard cardNumber={4}/>
                            </Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard cardNumber={5}/>
                            </Col>
                            <Col>
                                <HardwarePageCard cardNumber={6}/>
                            </Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard cardNumber={7}/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                </div>
            </div>
        </CardsBlockContainer>
    )
}