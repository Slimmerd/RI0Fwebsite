import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import useTranslation from 'next-translate/useTranslation'

const HeaderBlock = styled.div`
  height: 350px;
  background: #ECF0F1;
  box-shadow: 0 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  color: #2C3E50;

  .header {
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    padding-bottom: 20px;
  }

  .sub {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }


  @media (max-width: 786px) {
    .header {
      font-size: 76px;
      line-height: 86px;
    }
  }


  @media (max-width: 576px) {
    .header {
      font-size: 54px;
      line-height: 56px;
    }

    .sub {
      font-size: 18px;
      line-height: 20px;
    }
  }
`

export const PlanPageNaming = () => {
    const {t} = useTranslation()
    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'header'}>{t('plan:naming_block.heading')}</div>
                    <div className={'sub'}>{t('plan:naming_block.sub')}</div>
                </FadeInContainer>
            </div>
        </HeaderBlock>

    )
}