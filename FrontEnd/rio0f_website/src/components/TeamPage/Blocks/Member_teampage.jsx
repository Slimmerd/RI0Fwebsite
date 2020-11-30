import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {TeamMemberCard} from "./components/TeamMemberCard";


const Header = styled.div`
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    color: #2C3E50;
    
    padding: 14px 0 52px 0;
`

const Cards = styled.div`
  padding-bottom: 52px;
`

export const TeamPageMembers = () => {
    return (
        <div className={'container'}>
            <Header>Участники</Header>
           <Cards>
               <TeamMemberCard/>
           </Cards>
            <Cards>
               <TeamMemberCard/>
           </Cards>
            <Cards>
               <TeamMemberCard/>
           </Cards>
        </div>
    )
}