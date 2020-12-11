import styled from "styled-components";
import React, {useState} from 'react'
import {FadeInContainer} from "../../common/FadeInAnimation";
import {PhotosPageCarousel} from "./Carousel_photospage";
import {PhotosPageCarouselStub} from "./CarouselStab_photospage";

const PhotosPageBlock = styled.div`
    //height: 800px;
    padding-bottom: 50px;
`
// language=SCSS prefix=*{ suffix=}
const BlockHeader = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;

    color: #2C3E50;

    padding: 37px 0 21px 0;


    @media (max-width: 786px) {
      font-size: 76px;
      line-height: 86px;
    }


    @media (max-width: 576px) {
      font-size: 54px;
      line-height: 56px;
    }

    @media (max-width: 375px) {
      font-size: 42px;
      line-height: 48px;
    }

`

//TODO: Change stub to picture when it loaded from database
export const PhotosPageAction = () => {
    const [stub, showStub] = useState(false)

    return (
        <PhotosPageBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <BlockHeader>Событие 1</BlockHeader>
                </FadeInContainer>

                <FadeInContainer>
                    {stub ? <PhotosPageCarouselStub/> : <PhotosPageCarousel/>}
                </FadeInContainer>
            </div>
        </PhotosPageBlock>
    )
}