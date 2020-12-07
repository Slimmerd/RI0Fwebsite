import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import  {Carousel, Col, Row} from "antd";
import {SecondaryCard} from "../../NewsCards/SecondaryCard";
import {NewsAnimContainer} from "../../../../utils/NewsCardAnimation";

const HeaderBlock = styled.div`
    min-height: 550px;
    background: #ECF0F1;
    
    display: flex;
    align-items: center;
        
    .carousel{
    height: 450px;
     width: 800px;
    
    }
    @media (max-width: 992px){
    .carousel{
    width: 705px
    }
}
@media (max-width: 768px){
 .carousel{
    width: 550px
  }
}

@media (max-width: 576px){
  .carousel{
   max-width: 400px
  }
}
`

const items = [
    <Col><SecondaryCard/></Col>,
    <Col><SecondaryCard/></Col>,
    <Col><SecondaryCard/></Col>
]

        const Test = () =>{
             return(
                 <Carousel className={'carousel'} autoplay dots={false}>
                     {items}
                 </Carousel>
            )
        }



export const ActualNewsPagePreviousNews = () => {
    const [isSize, setSize] = useState(window.innerWidth);
    const breakpoint = 1200
    const sbreakpoint = 576

    useEffect(() => {
        window.addEventListener("resize", () => setSize(window.innerWidth));
    }, []);


    return (
        <HeaderBlock>
            <div className={'container'}>
                <Row gutter={[{ xs: 0, sm: 30, md: 30, lg: 30 },{ xs: 24, sm: 90, md: 90, lg: 90 }]} justify={'center'} align={'middle'} style={{paddingTop: '25px'}}>
                    {isSize <= breakpoint && isSize >= sbreakpoint ? <Test /> : <NewsAnimContainer items={items}/>}

                </Row>
            </div>
        </HeaderBlock>

    )
}