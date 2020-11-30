import React from 'react'

import {Col, Row, Button} from "antd";
import styled from "styled-components";

import { Icon, InlineIcon } from '@iconify/react';
import arrowThinUp from '@iconify/icons-si-glyph/arrow-thin-up';

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


export const ActualNewsPageNaming = () =>{
    return(

        <HeaderBlock>
            <div  className={'container'}>
                <Icon icon={arrowThinUp} style={{color: '#2c3e50', fontSize: '32px'}} vFlip={true} rotate="90deg" />
                <div className={'header'}>Заголовок новости</div>
                <div className={'sub'}>Автор Автор</div>
                <div className={'sub'}>1 Мая 2020 </div>

            </div>
        </HeaderBlock>

    )


}
