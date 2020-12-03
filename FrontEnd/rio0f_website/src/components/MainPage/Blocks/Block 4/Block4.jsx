import {Col, Row} from "antd";
import styled from "styled-components";
import {TeamCard} from "./Card/TeamCard";
import {FadeInContainer} from "../../../../utils/FadeInAnimation";
import React from 'react'

const Block = styled.div`
  height: 1283px;

`

const BlockHeader = styled.div`

  width: 266px;
  height: 107px;

  font-family: Oswald,sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 107px;

 
  letter-spacing: 0.03em;

  color: #2C3E50;
`

const CardBlock = styled.div`
 
  width: 100%;
  max-width: 1009px;
  margin: 0 auto;
`

export const MainPageBlock4 = () => {
    return (
        <Block>
            <div className={'container'}>
                <CardBlock>
                <Row style={{padding: '124px 0 39px 0'}} justify="center">
                    <FadeInContainer>
                    <BlockHeader>Команда</BlockHeader>
                    </FadeInContainer>
                </Row>
                    <FadeInContainer>
                    <Row gutter={[20.18, 25.57]} justify="center">
                        <Col>
                        <TeamCard/>
                        </Col>
                        <Col>
                        <TeamCard/>
                        </Col>
                        <Col>
                        <TeamCard/>
                        </Col>
                    </Row>
                    </FadeInContainer>
                    <FadeInContainer>
                    <Row gutter={[20.18, 25.57]} justify="center">
                        <Col>
                        <TeamCard/>
                        </Col>
                        <Col>
                        <TeamCard/>
                        </Col>
                    </Row>
                    </FadeInContainer>
                </CardBlock>
            </div>
        </Block>


    )


}