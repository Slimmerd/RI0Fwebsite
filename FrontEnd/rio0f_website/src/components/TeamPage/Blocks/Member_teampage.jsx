import React from 'react'
import styled from "styled-components";
import {TeamMemberCard} from "./components/TeamMemberCard";
import {FadeInContainer} from "../../../utils/FadeInAnimation";
import {useTranslation} from "react-i18next";

const Header = styled.div`
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    color: #2C3E50;
    
    padding: 25px 0 72px 0;
    
    
        @media (max-width: 786px){
  font-size: 76px;
  line-height: 86px;
  }

  @media (max-width:576px){
      font-size: 54px;
      line-height: 56px;
      }

 //@media (max-width:375px){
 //     font-size: 42px;
 //     line-height: 48px;
 //     }

`

const Cards = styled.div`
  padding-bottom: 52px;
`

export const TeamPageMembers = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className={'container'}>
            <FadeInContainer>
            <Header>{t('team:card_block.heading')}</Header>
            </FadeInContainer>

           <Cards>
               <FadeInContainer>
               <TeamMemberCard/>
               </FadeInContainer>
           </Cards>

            <Cards>
                <FadeInContainer>
               <TeamMemberCard/>
                </FadeInContainer>
           </Cards>

            <Cards>
                <FadeInContainer>
               <TeamMemberCard/>
                </FadeInContainer>
           </Cards>

            <Cards>
                <FadeInContainer>
                    <TeamMemberCard/>
                </FadeInContainer>
            </Cards>

            <Cards>
                <FadeInContainer>
                    <TeamMemberCard/>
                </FadeInContainer>
            </Cards>
        </div>
    )
}