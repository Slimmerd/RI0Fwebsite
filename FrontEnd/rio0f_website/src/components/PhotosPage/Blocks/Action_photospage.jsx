import styled from "styled-components";
import React from 'react'
import {Icon} from '@iconify/react';
import cameraIcon from '@iconify/icons-si-glyph/camera';
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const PhotosPageBlock = styled.div`
    //height: 800px;
    padding-bottom: 50px;
`
const BlockHeader = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;

    color: #2C3E50;
    
    padding: 37px 0 21px 0;
    
      
 @media (max-width: 786px){
  font-size: 76px;
  line-height: 86px;}
    

  @media (max-width:576px){
      font-size: 54px;
      line-height: 56px;
      }

 @media (max-width:375px){
       font-size: 42px;
      line-height: 48px;
      }

`

const GalleryCard = styled.div`
  height: 586px;
  width: 1110px;
  background: #2C3E50;
  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  transition: transform .4s ease-out 0s;
       &:hover{
        transform: scale(1.02);
         }
      
  svg{
     margin: 0 auto;
     padding-right: 16px;
     }
     
     @media (max-width: 1200px){
    width: 900px;
    }
    
    @media (max-width: 992px){
      width: 745px;
}

@media (max-width: 768px){
     width: 550px;
     height: 450px;
}

@media (max-width: 576px){
   width: 400px;
}

@media (max-width:376px){
    width: 270px;
    height: 280px;
    
}
`

export const PhotosPageAction = () => {
    return (
        <PhotosPageBlock>
            <div className={'container'}>
                <FadeInContainer>
                <BlockHeader>Событие 1</BlockHeader>
                </FadeInContainer>

                <FadeInContainer>
                <GalleryCard>
                    <Icon icon={cameraIcon} style={{color: '#ffffff', fontSize: '256px', alignItems:  'top'}}/>
                </GalleryCard>
                </FadeInContainer>
            </div>
        </PhotosPageBlock>
    )
}