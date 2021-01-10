import React from 'react';
import {Image, Carousel} from 'antd';
import styled from "styled-components";

const PhotoCard = styled.div`
    height: 586px;
    width: 1110px;
   
    //box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    //transition: transform .4s ease-out 0s;

    //&:hover {
    //  transform: scale(1.02);
    //}

    img {
      margin: 0 auto;
       height: 586px;
       width: 1110px;
        border-radius: 15px;
   
    }

    @media (max-width: 1200px) {
      width: 900px;
    }

    @media (max-width: 992px) {
      width: 745px;
    }

    @media (max-width: 768px) {
      width: 550px;
      height: 450px;
    }

    @media (max-width: 576px) {
      width: 400px;
    }

    @media (max-width: 376px) {
      width: 270px;
      height: 280px;

    }
`

export const PhotosPageCarousel = ({pictures}) => {
    return (
        <Carousel autoplay effect={'fade'}>
            {pictures ? pictures.map(
                (picture, i) => (
                    <PhotoCard key={i}>
                        <Image src={picture} alt=""/>
                    </PhotoCard>
                )
            ) : null}
        </Carousel>
    );
};

