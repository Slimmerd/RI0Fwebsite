import {Col, Row} from "antd";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import React from "react";
import styled from "styled-components";

const Block = styled.div`
  height: 100%;
  min-height: 860px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(180deg, rgba(44, 62, 80, 0.08) 0%, rgba(44, 62, 80, 0.25) 100%), url('/static/assets/tur-na-sakhalin-i-iturup-2019-03-3_1541665789.jpg') !important;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -101px;
  padding-top: 200px;

  .riofh1 {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 300px;
    line-height: 348px;
    letter-spacing: 0.08em;
    -webkit-backface-visibility: hidden;
    color: #FFFFFF;
  }

  .coord {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50.1933px;
    line-height: 59px;

    color: #ECF0F1;
  }

  .riof_inner {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 36px;
  }

  .coord_inner {
    width: 100%;
    max-width: 349px;
    margin: 0 auto;
    padding-bottom: 36px;
  }

  @media (max-width: 1200px) {
    .riofh1 {
      font-size: 250px;
      line-height: 265px;
    }
  }

  @media (max-width: 786px) {
    height: 100%;
    max-height: 536px;

    .riofh1 {
      font-size: 148px;
      line-height: 178px;
    }
  }

  @media (max-width: 576px) {
    .riofh1 {
      margin: 0 auto;
      font-size: 110px;
    }

    .coord {
      font-size: 35px;
      line-height: 29px;
    }
  }

  @media (max-width: 376px) {
    .riofh1 {
      margin: 0 auto;
      font-size: 90px;
    }

    .coord {
      font-size: 35px;
      line-height: 29px;
    }
  }
`

export const MainPageBlock1 = () => {
    return (
        <Block>
            <div className={'container'}>
                <FadeInContainer>
                    <Row className={'riof_inner'}>
                        <Col span={24}>
                            <div className={'riofh1'}>RIØFF</div>
                        </Col>
                    </Row>
                    <Row className={'coord_inner'}>
                        <Col span={24}>
                            <div className={'coord'}>RR-15-04</div>
                        </Col>
                    </Row>
                    <Row className={'coord_inner'}>
                        <Col span={24}>
                            <div className={'coord'}>AS-025</div>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </Block>

    )


}