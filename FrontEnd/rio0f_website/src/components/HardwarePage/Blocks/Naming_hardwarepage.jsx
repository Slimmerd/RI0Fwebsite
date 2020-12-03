import React from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
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


export const HardwarePageNaming = () => {
    return (
        <HeaderBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'header'}>Оборудование</div>
                    <div className={'sub'}>Список оборудования, которое использует команда</div>
                </FadeInContainer>
            </div>
        </HeaderBlock>
    )
}