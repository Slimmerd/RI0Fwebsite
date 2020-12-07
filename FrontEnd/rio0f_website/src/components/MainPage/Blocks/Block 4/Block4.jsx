import {Col, Row} from "antd";
import styled from "styled-components";
import {TeamCard} from "./Card/TeamCard";
import {FadeInContainer} from "../../../../utils/FadeInAnimation";
import React from 'react'

const Block = styled.div`
  height: 1283px;
   @media (max-width: 1200px) {
   height: 1809px;
  }
  @media (max-width: 768px) {
   height: 2559px;
  }
  
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
                        <Row align={'center'} gutter={{ xs: 0, sm: 16, md: 24}} >
                            <Col   xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard/>
                            </Col>
                            <Col   xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard/>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard/>
                            </Col>
                            <Col   xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard/>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard/>
                            </Col>
                        </Row>
        </FadeInContainer>
</CardBlock>
</div>
</Block>


)


}