import React from 'react'
import styled from "styled-components";
import useTranslation from 'next-translate/useTranslation'

// language=SCSS prefix=*{ suffix=}
const CardShape = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: left;

  height: 251px;
  width: 445px;
  border-radius: 12px;
  background: #FFFFFF;
  color: #1A1E22;

  @media (max-width: 576px) {
    min-height: 260px;
    max-width: 375px;
  }
  @media (max-width: 375px) {
    min-height: 260px;
    max-width: 300px;
  }
  @media (max-width: 320px) {
    min-height: 320px;
    max-width: 270px !important;
  }

  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);

`
const DateDiv = styled.div`

`
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
const BackNumber = styled.div`

  margin: 0 auto;
  content: "1";
  z-index: 1;
  position: absolute;
  font-weight: 900;
  font-size: 225.19px;
  line-height: 264px;
  left: 35.86%;
  right: 35.09%;
  top: -2.39%;
  bottom: -2.75%;
  display: flex;
  justify-content: center;
  user-select: none;
  color: #2C3E50;

  opacity: 0.07;
`

export const PlanCard = ({cardNumber}) => {
    const {t} = useTranslation()

    return (
        <CardShape style={{position: 'relative', zIndex: '2'}}>
            <div style={{padding: '46px 0 0 30px'}}>
                <DateDiv>{t('main:Block3.Card' + cardNumber + '.date')}</DateDiv>
                <HeaderDiv>{t('main:Block3.Card' + cardNumber + '.heading')}</HeaderDiv>
                <ContentDiv>{t('main:Block3.Card' + cardNumber + '.description')}</ContentDiv>
            </div>
            <BackNumber>{cardNumber}</BackNumber>
        </CardShape>
    )
}
