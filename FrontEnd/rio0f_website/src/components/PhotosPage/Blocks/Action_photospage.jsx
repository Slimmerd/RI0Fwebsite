import {Col, Row, Button} from "antd";
import styled from "styled-components";

import {Icon, InlineIcon} from '@iconify/react';
import cameraIcon from '@iconify/icons-si-glyph/camera';


const PhotosPageBlock = styled.div`
    height: 800px;
`
const BlockHeader = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;


    color: #2C3E50;
    
    padding: 37px 0 21px 0;

`

const GalleryCard = styled.div`
  height: 586px;
  width: 1110px;
  background: #2C3E50;
  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 15px;
  
  
  display: flex;
  align-items: center;
      
  svg{
     margin: 0 auto;
     }
      

`

export const PhotosPageAction = () => {
    return (
        <PhotosPageBlock>
            <div className={'container'}>
                <BlockHeader>Событие 1</BlockHeader>
                <GalleryCard>
                    <Icon icon={cameraIcon} style={{color: '#ffffff', fontSize: '256px'}}/>
                </GalleryCard>

            </div>
        </PhotosPageBlock>
    )
}