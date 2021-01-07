import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

const MainSponsorBlockContainer = styled.div`
  min-height: 710px;
  background: #ECF0F1;
`
const BlockHeader = styled.div`
  font-family: Oswald, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 142px;

  color: #2C3E50;

  padding-top: 25px;

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

export const DonatePageSecondarySponsors = () => {
    const {t} = useTranslation()

    return (
        <MainSponsorBlockContainer>
            <div className={'container'}>
                <FadeInContainer>
                    <BlockHeader>{t('donate:sponsor_block.heading')}</BlockHeader>
                </FadeInContainer>
            </div>
        </MainSponsorBlockContainer>
    )
}