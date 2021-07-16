import React from 'react'
import {Col, Row} from "antd";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import useTranslation from 'next-translate/useTranslation'
import Image from "next/image";
import styled from "styled-components";

const Block = styled.div`
  min-height: 650px;
  background: #2C3E50;
  box-shadow: 0px 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);

  .infoblock {
    padding: 104px 115px 0 0;
  }

  .islandmap {
    margin-top: 104px;
  }

  .islandinfoh1 {
    font-family: 'Oswald', sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 500;
    line-height: 55px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #ECF0F1;
    padding-bottom: 49px;

  }

  .islaninfop {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    color: #ECF0F1;

  }

  //1200+
  @media (max-width: 1200px) {
    min-height: 800px
  }

  //768-992
  @media (max-width: 992px) {
    min-height: 1050px;

    .infoblock {
      margin: 50px 15px 30px 15px;
      padding: 0;
    }

    .islandinfoh1 {
      text-align: center;
    }

    .islandmap {
      height: 500px;
      margin: 0 15px 0 15px;
    }
  }

  //576-768
  @media (max-width: 768px) {
    min-height: 1100px;

    .islandmap {
      height: 500px;
      min-width: 520px;
      margin-top: 48px;
      margin-bottom: 50px;
    }
  }

  //Up to 576
  @media (max-width: 576px) {
    min-height: 950px;

    .islaninfop {
      font-size: 16px;
    }

    .islandmap {
      height: 376px;
      min-width: 346px;
    }
  }

  //Up to 376
  @media (max-width: 376px) {
    min-height: 850px;

    .islaninfop {
      font-size: 14px;
    }

    .islandmap {
      height: 250px;
      min-width: 250px;
    }
  }
`

export const MainPageBlock2 = () => {
    const {t} = useTranslation()
    return (
        <Block>
            <FadeInContainer>
                <div className={'container'}>

                    <Row>
                        <Col className={'infoblock'} md={24} lg={12} xl={12} xxl={12}>
                            <div className={'islandinfoh1'}>{t('main:Block2.island_name')}</div>
                            <div className={'islaninfop'}>{t('main:Block2.island_description')}</div>
                        </Col>

                        <Col className={'islandmap'} md={24} lg={12} xl={12} xxl={12}>
                            <Image src={"/static/assets/RI0FF_1.webp"} alt="Iturup Island map"
                                   layout={'fill'} quality={90} priority/>
                        </Col>
                    </Row>

                </div>
            </FadeInContainer>
        </Block>

    )
}