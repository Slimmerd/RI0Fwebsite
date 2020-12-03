import {Col, Row, Button} from "antd";
import styled from "styled-components";
import React from 'react'
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const HeaderBlock = styled.div`
    height: 350px;
    background: #ECF0F1;
        
    display: flex;
    align-items: center;
    
    color: #2C3E50;
    
    .header{
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;
    
    padding-bottom: 20px;
    }
    
    .sub{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    }  
`

export const PlanPageNaming = () => {
    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'header'}>План</div>
                    <div className={'sub'}>Действий команды во время экспедиции</div>
                </FadeInContainer>
            </div>
        </HeaderBlock>

    )
}