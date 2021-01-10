import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Carousel, Col, Row} from "antd";
import {SecondaryCard} from "../../NewsCards/SecondaryCard";
import {NewsAnimContainer} from "../../../common/NewsCardAnimation";

const HeaderBlock = styled.div`
  min-height: 550px;
  background: #ECF0F1;

  display: flex;
  align-items: center;

  .carousel {
    height: 540px;
    width: 800px;

  }

  @media (max-width: 992px) {
    .carousel {
      width: 705px
    }
  }
  @media (max-width: 768px) {
    .carousel {
      width: 550px
    }
  }

  @media (max-width: 576px) {
    .carousel {
      max-width: 400px
    }
  }
`

export const ActualNewsPagePreviousNews = ({news}) => {
    const isBrowser = () => typeof window !== "undefined"
    const [isSize, setSize] = useState(null);
    const breakpoint = 1200
    const sbreakpoint = 576

    const items = [
        <Col><SecondaryCard news={news[0]}/></Col>,
        <Col><SecondaryCard news={news[1]}/></Col>,
        <Col><SecondaryCard news={news[2]}/></Col>
    ]

    const Test = () => {
        return (
            <Carousel className={'carousel'} autoplay dots={false}>
                {items}
            </Carousel>
        )
    }


    useEffect(() => {
        let timeoutID = null
        let isMounted = true

        if (isBrowser) setSize(window.innerWidth)

        const resizeListener = () => {
            if (isMounted) {
                clearTimeout(timeoutID)
                timeoutID = setTimeout(() => setSize(window.innerWidth), 150)
            }
        }

        window.addEventListener("resize", () => resizeListener());

        return () => {
            // remove resize listener
            isMounted = false
            window.removeEventListener('resize', resizeListener());
        }
    }, [setSize, isSize]);


    return (
        <HeaderBlock>
            <div className={'container'}>
                <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, {xs: 50, sm: 90, md: 90, lg: 90}]} justify={'center'}
                     align={'middle'} style={{paddingTop: '50px', marginTop: 0}}>
                    {isSize <= breakpoint && isSize >= sbreakpoint ? <Test/> : <NewsAnimContainer items={items}/>}
                </Row>
            </div>
        </HeaderBlock>

    )
}