import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../../utils/FadeInAnimation";
import {HardwarePageCard} from "./Card_hardwarepage";

// language=SCSS prefix=*{ suffix=}
const CardsBlockContainer = styled.div`
    min-height: 1386px;

    .start {
      padding-top: 140px;
    }
`

//Todo: Complete cards with information about hardware with translation
//Todo: Complete card number system

export const HardwarePageCardsBlock = () => {
    return (
        <CardsBlockContainer>
            <div className={'container'}>
                <div className={'start'}>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard/>
                            </Col>
                            <Col>
                                <HardwarePageCard/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard/>
                            </Col>
                            <Col>
                                <HardwarePageCard/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <HardwarePageCard/>
                            </Col>
                            <Col>
                                <HardwarePageCard/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                </div>
            </div>
        </CardsBlockContainer>
    )
}