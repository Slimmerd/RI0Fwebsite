import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../../utils/FadeInAnimation";
import React from 'react'

const MainSponsorBlockContainer = styled.div`
    height: 710px;
    background: #ECF0F1;
     box-shadow: 0px 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);
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

export const DonatePageMainSponsors = () => {
    return (
        <MainSponsorBlockContainer>
            <div className={'container'}>
                <FadeInContainer>
                <BlockHeader>Главные спонсоры</BlockHeader>
                </FadeInContainer>
            </div>
        </MainSponsorBlockContainer>
    )
}