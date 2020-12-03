import {Col, Row, Button} from "antd";
import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const MainSponsorBlockContainer = styled.div`
    height: 710px;
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
`

export const DonatePageSecondarySponsors = () => {
    return (
        <MainSponsorBlockContainer>
            <div className={'container'}>
                <FadeInContainer>
                <BlockHeader>Cпонсоры</BlockHeader>
                </FadeInContainer>
            </div>
        </MainSponsorBlockContainer>
    )
}