import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";

// language=SCSS prefix=*{ suffix=}
const Card = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #ECF0F1;
        
    width: 540px;
    height: 300px;
    background: #2C3E50;
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    position: relative;
    z-index: 2;

    transition: transform .4s ease-out 0s;

    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: 576px) {
      width: 375px
    }
    @media (max-width: 376px) {
      width: 270px
    }
`

const HardwareType = styled.div`

`
// language=SCSS prefix=*{ suffix=}
const HeaderDiv = styled.div`
    padding: 20px 103px 18px 0;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    @media (max-width: 576px) {
      padding: 20px 40px 18px 0;
      font-size: 24px;
      line-height: 28px;
    }

`
const ContentDiv = styled.div`
    padding: 0 71px 69px 0
`
// language=SCSS prefix=*{ suffix=}
const BackNumber = styled.div`

    margin: 0 auto;
    content: "1";
    z-index: 1;
    position: absolute;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 225.19px;
    line-height: 264px;

    left: 35%;
    right: 35%;
    top: 6.67%;
    bottom: 3.37%;

    display: flex;
    justify-content: center;

    color: #FFFFFF;

    opacity: 0.07;
`

export const HardwarePageCard = ({cardNumber}) => {
    const {t, i18n} = useTranslation()
    return (
        <Card>
            <div style={{padding: '46px 0 0 30px'}}>
                <HardwareType>{t('hardware:card_block.Card' + cardNumber + '.type')}</HardwareType>
                <HeaderDiv>{t('hardware:card_block.Card' + cardNumber + '.heading')}</HeaderDiv>
                <ContentDiv>{t('hardware:card_block.Card' + cardNumber + '.description')}</ContentDiv>
            </div>
            <BackNumber>{cardNumber}</BackNumber>
        </Card>
    );
};
