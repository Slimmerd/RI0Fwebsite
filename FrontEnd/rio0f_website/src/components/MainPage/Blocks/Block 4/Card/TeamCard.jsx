import React from 'react'
import styled from "styled-components";
import img from '../../../../../assets/r6mg.jpg'
import {useTranslation} from "react-i18next";

const CardShape = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    text-align: center;
    height: 430.43px;
    min-width: 338px;
    border-radius: 12px;
    background: transparent;
    color: #1A1E22;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    @media (max-width:376px) {
   min-width: 250px;

  }
`

const PcitureDiv = styled.div`
 
  margin: 21.34px auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  max-width: 322.82px;
  height: 322.82px;
  background-image: url(${img});
  border-radius: 7.5px;
   box-shadow: 26.8756px 21.5274px 68.8687px rgba(0, 0, 0, 0.07), 17.4194px 13.9529px 40.3328px rgba(0, 0, 0, 0.0531481), 10.3521px 8.29202px 21.936px rgba(0, 0, 0, 0.0425185), 5.37511px 4.30547px 11.1912px rgba(0, 0, 0, 0.035), 2.18986px 1.75408px 5.61152px rgba(0, 0, 0, 0.0274815), 0.497696px 0.398655px 2.71011px rgba(0, 0, 0, 0.0168519);
   
   
   transition: transform .4s ease-out 0s;
   display: flex;
  align-items: flex-end;
  //  @media (max-width:375px) {
  //width: 260px;
  //height: 260px;
  }
   
   
   
  .hoverino{ 
  font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 65px;
    color: #FFFFFF;
  
  
  width: 100%;
   height: 20%;
   opacity: 0;
   background-color: rgba(44, 62, 80, 1);
   border-radius: 0 0 7.5px 7.5px;
   transition: opacity 0.2s ease-out 0s;
  }
   
   
   
  &:hover {
    transform: scale(1.05);
    .hoverino{ 
    
    opacity: 1;
    }
  }
  

`

const TextDiv = styled.div`
    padding-top: 10px;
    font-weight: 500;
    font-size: 55.0949px;
    line-height: 65px;

    color: #2C3E50;
`

export const TeamCard = ({cardNumber}) => {
    const { t, i18n } = useTranslation()
    return (
        <CardShape>
            <PcitureDiv>
                <div className={'hoverino'}>{t('main:Block4.Card'+cardNumber+'.name')}</div>
            </PcitureDiv>
            <TextDiv>{t('main:Block4.Card'+cardNumber+'.call')}</TextDiv>
        </CardShape>


    )

}
