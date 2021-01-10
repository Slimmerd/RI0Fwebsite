import {Col, Row} from "antd";
import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import {PlanPageCard} from "./PlanCard_planpage";

// language=SCSS prefix=*{ suffix=}
const CardsBlockContainer = styled.div`
    min-height: 1386px;

    .start {
      padding-top: 140px;
    }
`

export const PlanPageCardsBlock = () => {
    return (
        <CardsBlockContainer>
            <div className={'container'}>
                <div className={'start'}>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <PlanPageCard/>
                            </Col>
                            <Col>
                                <PlanPageCard/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <PlanPageCard/>
                            </Col>
                            <Col>
                                <PlanPageCard/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 50]} justify={'center'}>
                            <Col>
                                <PlanPageCard/>
                            </Col>
                            <Col>
                                <PlanPageCard/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                </div>
            </div>
        </CardsBlockContainer>
    )
}