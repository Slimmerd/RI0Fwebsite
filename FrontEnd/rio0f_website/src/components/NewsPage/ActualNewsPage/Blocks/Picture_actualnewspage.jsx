import React from 'react'
import styled from "styled-components";
import {Icon} from "@iconify/react";
import cameraIcon from '@iconify/icons-si-glyph/camera';
import {FadeInContainer} from "../../../../utils/FadeInAnimation";

const HeaderBlock = styled.div`
    height: 600px;
    background: #2C3E50;
    
    display: flex;
    align-items: center;
    
    color: #2C3E50;
    
    svg{
      margin: 0 auto;
      }
`

export const ActualNewsPagePicture = () => {
    return (
        <FadeInContainer>
        <HeaderBlock>
            <div className={'container'}>
                <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '256px'}}/>
            </div>
        </HeaderBlock>
        </FadeInContainer>
    )
}