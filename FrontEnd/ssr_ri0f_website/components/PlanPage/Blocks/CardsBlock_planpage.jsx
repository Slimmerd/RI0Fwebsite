import {Col, Row} from "antd";
import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import {PlanPageCard} from "./PlanCard_planpage";

const CardsBlockContainer = styled.div`
  min-height: 1386px;

  .start {
    padding-top: 140px;
    padding-bottom: 90px;
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
                                <PlanPageCard cardNumber={1}/>
                            </Col>
                            <Col>
                                <PlanPageCard cardNumber={2}/>
                            </Col>

                            <Col>
                                <PlanPageCard cardNumber={3}/>
                            </Col>
                            <Col>
                                <PlanPageCard cardNumber={4}/>
                            </Col>

                            <Col>
                                <PlanPageCard cardNumber={5}/>
                            </Col>
                            <Col>
                                <PlanPageCard cardNumber={6}/>
                            </Col>
                        </Row>
                    </FadeInContainer>
                </div>
            </div>
        </CardsBlockContainer>
    )
}