import React from 'react'
import {Col, Row} from "antd";
import {PlanCard} from "./Components/PlanCard";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import {CardFadeInContainer} from "../../../common/CardSideAnimation";
import styled from "styled-components";
import {LineSContainer} from "../../../common/LineAnimation";
import {useEffect, useState} from "react";
import {SponsorsBlock} from "./Components/Sponsors";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

const Block = styled.div`
  min-height: 1854px;
  background: #E5E5E5;
  position: relative;
  box-shadow: 0 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  a {
    color: #2C3E50;
    transition: transform .2s ease-out 0s;

    &:hover {
      color: hsl(210, 29%, 40%);

      transform: scale(1.05) perspective(1px);
    }
  }

  &::before {
    content: "";
    opacity: 0.05;
    background-repeat: no-repeat;
    background-image: ~'url(/static/assets/compas.webp)' !important;
    background-size: 865.33px, 567.22px;

    background-position: bottom 53px left -81px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    pointer-events: none
  }

  .sponsorsblock {
    padding-top: 108px;
  }

  .sponsorsblock img {
    width: 90px;
    height: 90px;
  }

  .expplan {
    padding-top: 168px;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
  }

  .expplanh1 {
    font-family: Oswald, sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 500;
    line-height: 107px;
    letter-spacing: 0.03em;
    text-align: center;

    color: #2C3E50;
    padding-bottom: 50px;
  }

  .cardblock {
    padding-top: 39px;
  }

  @media (max-width: 768px) {
    min-height: 2054px;
  }

  @media (max-width: 375px) {
    min-height: 2254px;

    .expplanh1 {
      font-size: 54px;
      line-height: 64px;
    }
  }

  @media (max-width: 280px) {
    .expplanh1 {
      font-size: 45px;
      line-height: 45px;
    }

    min-height: 2454px;
  }
`

const FirstPath = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 417.54px;
    top: 150px;
  }

  @media (max-width: 992px) {
    svg {
      display: none;
    }
  }

`
const SecondPath = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 250px;
    top: 165px;
  }

  @media (max-width: 992px) {
    svg {
      display: none;
    }
  }
`
const ThirdPath = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 445px;
    top: 200px;


  }

  @media (max-width: 992px) {
    svg {
      display: none;
    }
  }
`

export const MainPageBlock3 = () => {
    const isBrowser = () => typeof window !== "undefined"

    const [isSize, setSize] = useState(null);
    const breakpoint = 768
    const {t} = useTranslation()

    useEffect(
        function mount() {
            if (isBrowser) setSize(window.innerWidth)

            function onResize() {
                setSize(window.innerWidth)
            }

            window.addEventListener("resize", onResize);

            return function unMount() {
                window.removeEventListener("scroll", onResize);
            };
        }, []);

    return (
        <Block>
            <div className={'container'}>
                <FadeInContainer>
                    <SponsorsBlock/>
                </FadeInContainer>

                <div className={'expplan'}>
                    <Row>
                        <Col span={24}>
                            <FadeInContainer>
                                <div className={'expplanh1'}>{t('main:Block3.plan_title')}</div>
                            </FadeInContainer>
                        </Col>
                    </Row>
                    <FirstPath>

                        <Row className={'cardblock'} justify={isSize <= breakpoint ? 'center' : "start"}>
                            <CardFadeInContainer side={false}>
                                <PlanCard cardNumber={'1'}/>
                            </CardFadeInContainer>
                        </Row>

                        {/*Line animation*/}
                        <LineSContainer svg={{
                            width: "239",
                            height: "212",
                            viewBox: "0 0 239 212",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }} path={{
                            d: "M28.1272 0.592529C47.3407 5.57437 79.342 15.2644 96.0366 29.7148C121.783 52 122.231 81.884 121.783 101C121.161 127.523 102.592 168.047 85.2203 191.439C71.5656 209.826 47.9118 215.83 20 206C7.12778 201.467 -1.48293 180.85 1.73008 168.459C7.06458 147.885 28.9087 131.759 47.9118 124.67C71.454 115.889 97.0834 114.599 121.783 118.322C145.236 121.857 170.356 130.036 191.5 141C202.5 146.704 224 162 230.703 173C237.407 184 234.5 178.5 238 197",
                            stroke: "#9C9E9F",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }}/>
                    </FirstPath>
                    <SecondPath>
                        {/*Line animation*/}
                        <LineSContainer svg={{
                            width: "241",
                            height: "218",
                            viewBox: "0 0 241 218",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }} path={{
                            d: "M233.427 6.6306C210.5 -8.49987 166.192 11.6952 149 35.5001C129.5 62.5 127.85 83.9686 126 103C123.433 129.406 134.563 169.692 149 195C160.348 214.893 200.061 219.7 219 215.5C239.834 208.146 241.18 189.14 239.478 176.452C236.652 155.386 216.903 136.754 198.888 127.435C176.571 115.891 148.665 111 125.665 108.5C102.086 105.937 81 107.757 60.5 113.5C40 119.243 12 137.5 3.5 167.5C0.498578 175.46 0.499922 181.208 0.499922 189",
                            stroke: "#9C9E9F",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }}/>

                        <Row className={'cardblock'} justify={isSize <= breakpoint ? 'center' : "end"}>
                            <CardFadeInContainer side={true}>
                                <PlanCard cardNumber={'2'}/>
                            </CardFadeInContainer>
                        </Row>

                    </SecondPath>
                    <ThirdPath>
                        <Row className={'cardblock'} justify={isSize <= breakpoint ? 'center' : "start"}>
                            <CardFadeInContainer side={false}>
                                <PlanCard cardNumber={'3'}/>
                            </CardFadeInContainer>
                        </Row>
                        <LineSContainer svg={{
                            width: "364",
                            height: "160",
                            viewBox: "0 0 364 160",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }} path={{
                            d: "M0.999946 33.5001C32.5 10 77.7499 1.50006 116.5 1.50007C169.5 1.50006 247.5 4.50006 308.5 57.0001C369.5 109.5 363 158.5 363 158.5",
                            stroke: "#9C9E9F",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }}/>
                    </ThirdPath>
                    <Row className={'cardblock'} justify={isSize <= breakpoint ? 'center' : "end"}>
                        <CardFadeInContainer side={true}>
                            <PlanCard cardNumber={'4'}/>
                        </CardFadeInContainer>
                    </Row>
                    <Row className={'cardblock'} justify={isSize <= breakpoint ? 'center' : "end"}>
                        <FadeInContainer>
                            <Link href="/plan"><a>{t('main:Block3.more_button')}</a></Link>
                        </FadeInContainer>
                    </Row>
                    <div style={{paddingBottom: '80px'}}/>
                </div>
            </div>
        </Block>

    )
}