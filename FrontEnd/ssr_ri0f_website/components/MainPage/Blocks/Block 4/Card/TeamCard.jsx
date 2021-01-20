import React from 'react'
import styled from "styled-components";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';

const R6MG = '/static/assets/r6mg.webp'
const RZ3EC = '/static/assets/RZ3EC.webp'
const M0MSV = '/static/assets/M0MSV.webp'
const RX3F = '/static/assets/RX3F.webp'
const RN3BL = '/static/assets/RN3BL.webp'
const R6LGT = '/static/assets/R6LGT.webp'

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

  @media (max-width: 376px) {
    min-width: 250px;

  }
`

const PcitureDiv = styled.div`

  margin: 21.34px auto;
  background-repeat: no-repeat;
  background-size: ${props => props.picture === R6LGT ? "200% auto" : "cover"};;
  background-position: ${props => (props.picture === M0MSV || props.picture === RN3BL) ? 'left center' : props.picture === R6LGT ? "center 20%" : "center center"};
  max-width: 322.82px;
  height: 322.82px;
  background-image: ${props => `url(${props.picture})`};
  border-radius: 7.5px;
  box-shadow: 26.8756px 21.5274px 68.8687px rgba(0, 0, 0, 0.07), 17.4194px 13.9529px 40.3328px rgba(0, 0, 0, 0.0531481), 10.3521px 8.29202px 21.936px rgba(0, 0, 0, 0.0425185), 5.37511px 4.30547px 11.1912px rgba(0, 0, 0, 0.035), 2.18986px 1.75408px 5.61152px rgba(0, 0, 0, 0.0274815), 0.497696px 0.398655px 2.71011px rgba(0, 0, 0, 0.0168519);
  transition: transform .4s ease-out 0s;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  //  @media (max-width:375px) {
  //width: 260px;
  //height: 260px;
  //}

  .hoverino {
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

    .hoverino {

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

const theme = {
    R6MG: R6MG,
    RZ3EC: RZ3EC,
    M0MSV: M0MSV,
    R6LGT: R6LGT,
    RX3F: RX3F,
    RN3BL: RN3BL
};

export const TeamCard = ({callName}) => {
    const {t} = useTranslation()
    return (
        <CardShape>
            <Link href={`/team/#` + callName}>
                <PcitureDiv picture={theme[callName]}>
                    <div className={'hoverino'}>{t('main:Block4.' + callName + '.name')}</div>
                </PcitureDiv>
            </Link>
            <TextDiv>{t('main:Block4.' + callName + '.call')}</TextDiv>
        </CardShape>
    )
}
