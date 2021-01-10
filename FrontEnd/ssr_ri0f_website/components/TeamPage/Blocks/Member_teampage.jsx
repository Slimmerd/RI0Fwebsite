import React from 'react'
import styled from "styled-components";
import {TeamMemberCard} from "./components/TeamMemberCard";
import {FadeInContainer} from "../../common/FadeInAnimation";
import useTranslation from 'next-translate/useTranslation'

const Header = styled.div`
  font-family: Oswald, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 142px;

  color: #2C3E50;

  padding: 25px 0 72px 0;


  @media (max-width: 786px) {
    font-size: 76px;
    line-height: 86px;
  }

  @media (max-width: 576px) {
    font-size: 54px;
    line-height: 56px;
  }

`

const Cards = styled.div`
  padding-bottom: 52px;
`

export const TeamPageMembers = () => {
    const {t} = useTranslation()

    return (
        <div className={'container'}>
            <FadeInContainer>
                <Header>{t('team:card_block.heading')}</Header>
            </FadeInContainer>

            <Cards id={'RZ3EC'}>
                <FadeInContainer>
                    <TeamMemberCard teamMember={'RZ3EC'}/>
                </FadeInContainer>
            </Cards>

            <Cards id={'R6MG'}>
                <FadeInContainer>
                    <TeamMemberCard teamMember={'R6MG'}/>
                </FadeInContainer>
            </Cards>

            <Cards id={'RX3F'}>
                <FadeInContainer>
                    <TeamMemberCard teamMember={'RX3F'}/>
                </FadeInContainer>
            </Cards>

            <Cards id={'M0MSV'}>
                <FadeInContainer>
                    <TeamMemberCard teamMember={'M0MSV'}/>
                </FadeInContainer>
            </Cards>

            <Cards id={'R6LGT'}>
                <FadeInContainer>
                    <TeamMemberCard teamMember={'R6LGT'}/>
                </FadeInContainer>
            </Cards>
        </div>
    )
}