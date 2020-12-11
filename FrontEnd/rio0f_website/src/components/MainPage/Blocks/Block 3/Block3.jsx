import React from 'react'
import {Col, Row} from "antd";
import {PlanCard} from "./Components/PlanCard";
import {FadeInContainer} from "../../../common/FadeInAnimation";
import {CardFadeInContainer} from "../../../common/CardSideAnimation";
import styled from "styled-components";
import {LineSContainer} from "../../../common/LineAnimation";
import {useEffect, useState} from "react";
import {SponsorsBlock} from "./Components/Sponsors";
import {useTranslation} from "react-i18next";

//TODO: Inserting sponsor logo system, inserting card system, card pathway animation

const FirstPath = styled.div`
position: relative;
    svg{
    position: absolute;
    left: 417.54px;
    top: 150px;
    }
    @media (max-width: 768px) {
     svg{
    display: none;
    }
    }
    
`
const SecondPath = styled.div`
position: relative;
    svg{
    position: absolute;
    left: 250px;
    top: 165px;
    }
     @media (max-width: 768px) {
     svg{
    display: none;
    }
    }
`

const ThirdPath = styled.div`
position: relative;
    svg{
    position: absolute;
    left: 445px;
    top: 200px;
    }
     @media (max-width: 768px) {
     svg{
    display: none;
    }
    }
`

export const MainPageBlock3 = () => {
    const [isSize, setSize] = useState(window.innerWidth);
    const breakpoint = 768
    const { t, i18n } = useTranslation()

        useEffect(() => {
            window.addEventListener("resize", () => setSize(window.innerWidth));
                   }, []);

    return (
        <div className={'block3'}>
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
                        <LineSContainer svg={{width:"232", height:"206", viewBox:"0 0 232 206", fill:"none", xmlns:"http://www.w3.org/2000/svg"}} path={{d:"M28.1272 0.592476C47.3407 5.57431 87.9826 7.88702 96.0366 29.7147C103.399 49.6668 102.837 81.5209 102.388 100.637C101.766 127.16 102.592 168.047 85.2203 191.439C71.5656 209.826 33.7448 205.674 15.4473 199.23C2.57512 194.697 -1.48297 180.85 1.73004 168.459C7.06454 147.885 28.9087 131.758 47.9117 124.67C71.4539 115.889 97.0834 114.599 121.783 118.322C145.236 121.857 171.312 125.831 193.309 134.964C209.482 141.679 223.562 154.212 227.798 171.503C229.822 179.765 227.596 189.435 230.703 196.997", stroke:"#9C9E9F", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </FirstPath>
                    <SecondPath>
                    {/*Line animation*/}
                    <LineSContainer svg={{width:"233", height:"202", viewBox:"0 0 233 202", fill:"none", xmlns:"http://www.w3.org/2000/svg"}} path={{d:"M225.427 0.630533C205.755 3.26942 165.129 0.685652 154.512 21.3884C144.808 40.3123 141.541 72.0033 139.691 91.0348C137.124 117.441 131.396 157.933 145.833 183.241C157.181 203.134 195.227 203.554 214.165 199.354C227.489 196.399 233.18 183.139 231.478 170.452C228.653 149.386 208.903 130.754 190.888 121.435C168.571 109.891 143.281 105.533 118.314 106.263C94.6061 106.957 68.2415 107.772 45.307 114.197C28.4443 118.922 12.9613 129.674 6.68029 146.331C3.67887 154.29 4.72726 164.157 0.734847 171.292", stroke:"#9C9E9F", strokeLinecap:"round", strokeLinejoin:"round"}}/>

                    <Row className={'cardblock'} justify={isSize <= breakpoint ? 'center' : "end"} >
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
                        <LineSContainer svg={{width:"219", height:"137", viewBox:"0 0 219 137", fill:"none", xmlns:"http://www.w3.org/2000/svg"}} path={{d:"M0.917523 30.6895C18.1131 19.866 30.3883 1.40007 69.7652 1.39988C145.888 3.45375 159.388 16.9166 178.388 39.9541C218.388 88.4541 217.888 103.954 217.888 136.454", stroke:"#9C9E9F", strokeLinecap:"round", strokeLinejoin:"round"}}/>
                    </ThirdPath>
                    <Row className={'cardblock'} justify={isSize <= breakpoint? 'center' : "end"}>
                        <CardFadeInContainer side={true}>
                        <PlanCard cardNumber={'4'}/>
                        </CardFadeInContainer>
                    </Row>
                    <div style={{paddingBottom: '80px'}}></div>
                </div>
            </div>
        </div>

    )


}