import styled from "styled-components";
import {FadeInContainer} from "../../common/FadeInAnimation";
import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const MainSponsorBlockContainer = styled.div`
  min-height: 710px;
  background: #ECF0F1;
  box-shadow: 0 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);
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

export const DonatePageMainSponsors = () => {
    const {t} = useTranslation()

    return (
        <MainSponsorBlockContainer>
            <div className={'container'}>
                <FadeInContainer>
                    <BlockHeader>{t('donate:main_sponsor_block.heading')}</BlockHeader>
                </FadeInContainer>
            </div>
        </MainSponsorBlockContainer>
    )
}