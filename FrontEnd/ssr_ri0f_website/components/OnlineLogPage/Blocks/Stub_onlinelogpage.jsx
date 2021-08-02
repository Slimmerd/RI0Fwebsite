import React from 'react'
import styled from "styled-components";
import useTranslation from 'next-translate/useTranslation'

const MainDiv = styled.div`
  height: 650px;

  display: flex;
  align-items: center;

  .block {
    background: #2C3E50;
    border-radius: 15px;
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  }

  .text {
    padding: 25px 0 25px 0;
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;

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
    transition: background-position 0.5s ease;
  }

  .text:hover {
    background-position: 0
  }

  @media (max-width: 992px) {
    .text {
      font-size: 72px;
      line-height: 81px;
    }
  }

  @media (max-width: 768px) {
    .text {
      font-size: 64px;
      line-height: 72px;
    }
  }

  @media (max-width: 576px) {
    .text {
      font-size: 56px;
      line-height: 64px;
    }
  }

  @media (max-width: 376px) {
    .text {
      font-size: 48px;
      line-height: 56px;
    }
  }
`

export const OnlineLogPageStub = () => {
    const {t} = useTranslation()

    return (
        <MainDiv>
            <div className={'container'}>
                <a href="https://clublog.org/logsearch/RI0FF" target="_blank" rel="noopener noreferrer">
                    <div className={'block'}>
                        <div className={'text'}>{t('onlinelog:stub_block.heading')}</div>
                    </div>
                </a>
            </div>
        </MainDiv>
    )
}