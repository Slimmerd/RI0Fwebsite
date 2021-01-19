import {Col, Row} from "antd";
import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import useTranslation from 'next-translate/useTranslation'

const MethodsPageContainer = styled.div`
  min-height: 704px;
`

const BlockHeader = styled.div`
  font-family: Oswald, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 142px;
  color: #2C3E50;

  padding: 42px 0 94px 0;

  @media (max-width: 786px) {
    font-size: 76px;
    line-height: 86px;
  }

  @media (max-width: 576px) {
    font-size: 54px;
    line-height: 56px;
  }

  @media (max-width: 375px) {
    font-size: 42px;
    line-height: 48px;
  }
`

const Card = styled.div`
  width: 540px;
  min-height: 250px;

  background: #2C3E50;
  border: 0.5px solid #BDC3C7;
  box-sizing: border-box;

  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 15px;

  transition: transform .4s ease-out 0s;

  &:hover {
    transform: scale(1.02);
  }

  .Headers, .sub {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #ECF0F1;
    text-align: left;
    padding: 12px 0 0 27px;
  }

  .sub {
    padding-top: 50px;
    font-weight: 400;

    a {
      color: #ECF0F1;
      text-decoration: none;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to right,
      #ff0043,
      #ff0043 50%,
      #ECF0F1 50%);
      background-size: 200% 100%;
      background-position: 100%;
    }

    a:hover {
      transition: all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1);
      background-position: 0
    }
  }

  @media (max-width: 786px) {

  }

  @media (max-width: 576px) {
    width: 360px;

    .Headers, .sub {
      font-size: 32px;
      line-height: 36px;
    }
  }

  @media (max-width: 375px) {
    width: 270px;

    .Headers, .sub {
      font-size: 28px;
      line-height: 32px;
      text-align: center;
      padding: 12px 0 0 0;
    }
  }
`

export const DonatePageMethods = () => {
    const {t} = useTranslation()

    return (
        <MethodsPageContainer>
            <div className={'container'}>

                <FadeInContainer>
                    <BlockHeader>{t('donate:methods_block.heading')}</BlockHeader>
                </FadeInContainer>

                <FadeInContainer>
                    <Row justify={'center'} gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 90]}>
                        <Col>
                            <Card>
                                <div className={'Headers'}>{t('donate:methods_block.paypal.heading')}:</div>
                                <div className={'sub'}><a
                                    href={'https://www.paypal.com/paypalme/RZ3EC'}>rz3ec@yandex.ru -></a></div>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <div className={'Headers'}>{t('donate:methods_block.card_transfer.heading')}:</div>
                                <div className={'sub'}>{t('donate:methods_block.card_transfer.sub')}</div>
                            </Card>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </MethodsPageContainer>
    )
}