import {Col, Row} from "antd";
import styled from "styled-components";
import {TeamCard} from "./Card/TeamCard";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import React from 'react'
import {useTranslation} from "react-i18next";

const Block = styled.div`
  min-height: 1283px;
   @media (max-width: 1200px) {
   min-height: 1809px;
  }
  @media (max-width: 768px) {
   min-height: 2559px;
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
    const { t, i18n } = useTranslation()
    return (
        <Block>
            <div className={'container'}>
                <CardBlock>
                    <Row style={{padding: '124px 0 39px 0'}} justify="center">
                        <FadeInContainer>
                            <BlockHeader>{t('main:Block4.team_title')}</BlockHeader>
                        </FadeInContainer>
                    </Row>
                    <FadeInContainer>
                        <Row align={'center'} gutter={[{ xs: 0, sm: 0, md: 24},{ xs: 42, sm: 42, md: 54}]} >
                            <Col   xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard cardNumber={'1'}/>
                            </Col>
                            <Col   xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard cardNumber={'2'}/>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard cardNumber={'3'}/>
                            </Col>
                            <Col   xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard cardNumber={'4'}/>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                                <TeamCard cardNumber={'5'}/>
                            </Col>
                        </Row>
        </FadeInContainer>
                    <div style={{paddingBottom: '80px'}}></div>
</CardBlock>
</div>
</Block>


)


}