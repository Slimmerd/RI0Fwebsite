import React from 'react'
import styled from "styled-components";
import {Icon} from "@iconify/react";
import cameraIcon from '@iconify/icons-si-glyph/camera';
import {FadeInContainer} from "../../../common/FadeInAnimation";

const HeaderBlock = styled.div`
  height: auto;

  display: flex;
  align-items: center;

  color: #2C3E50;


  background: #2C3E50;


  svg {
    margin: 0 auto;
    padding-right: 16px;
  }


  img {
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    max-width: 100%;
    max-height: 1080px;
    margin: 0 auto;
  }

`
//FIX: Picture photo
export const ActualNewsPagePicture = ({Photo}) => {
    return (
        <FadeInContainer>
            <HeaderBlock picture={Photo}>
                {/*<div className={'container'}>*/}
                {!Photo ? <div>
                    <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '256px'}}/>
                </div> : null}
                <img src={Photo} alt=""/>
                {/*</div>*/}
            </HeaderBlock>
        </FadeInContainer>
    )
}