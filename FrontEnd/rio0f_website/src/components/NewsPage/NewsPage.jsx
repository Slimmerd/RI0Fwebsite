import React, {useEffect, useState} from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {MainCard} from "./NewsCards/MainCard";
import {SecondaryCard} from "./NewsCards/SecondaryCard";
import {FadeInContainer} from "../../utils/FadeInAnimation";
import {NewsAnimContainer} from "../../utils/NewsCardAnimation";

//Fix: Header

const NewsPageBlock = styled.div`
      background: #ECF0F1;
`

const PageContainer = styled.div`
       width: 100%;
       max-width: 1110px;
       margin: 0 auto;
       text-align: center;
   
   .test{
   margin-bottom:50px !important;
   }
       
       @media (max-width: 1200px){
      max-width: 900px
  }
  
@media (max-width: 992px){
    max-width: 745px
}


@media (max-width: 768px){
    max-width: 550px
}

@media (max-width: 576px){
    max-width: 400px
}

@media (max-width:360px){
    max-width: 270px
}
`

const NamingBlock = styled.div`
      height: 319px;
      display: flex;
      align-items: center;
     
     .header{
     font-family: Oswald,sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 96px;
      line-height: 142px;
      
      color: #2C3E50;
      padding-bottom: 20px;
     }
     
     .paragraph{
     font-family: Roboto, sans-serif;
     font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      color: #2C3E50;
     }
     
     .textblock{
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding-top: 31px;
     }
     @media (max-width:425px){
    .header{
      font-size: 76px;
      line-height: 86px;}
}
`

const ExtraNews = styled.div`
    height: 181px;
    display: flex;
    align-items: center;
    
    .button{
    width: 300px;
    height: 75px;
   
    border-radius: 15px;
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    margin: 0 auto;
    color: #ECF0F1;
    }

    .ant-btn.ant-btn-primary,
    .ant-btn-primary {
    background-color: #2C3E50;
    border-color: #2c3e50;
    &:hover {
    background-color: #37617e !important;
    border-color: #37617e !important;
  }
  }
`

export const NewsPage = () => {
    const [isSize, setSize] = useState(window.innerWidth);
    const breakpoint = 768

    useEffect(() => {
        window.addEventListener("resize", () => setSize(window.innerWidth));
    }, []);



    return (
        <NewsPageBlock>
            <PageContainer>
                {/*Naming block*/}
                <FadeInContainer>
                    <NamingBlock>
                        <div className={'textblock'}>
                            <div className={'header'}>RIØF Новости</div>
                            <div className={'paragraph'}>Последние новости от нашей команды</div>
                        </div>
                    </NamingBlock>
                </FadeInContainer>
                {/*Main card*/}
                <FadeInContainer>
                    { isSize > breakpoint ? <MainCard/> : <div className={'test'}><SecondaryCard/></div>}
                </FadeInContainer>
                {/*Other News card*/}
                <Row gutter={[{ xs: 0, sm: 24, md: 24, lg: 24 },48]} align={'center'}>
                    <NewsAnimContainer
                        items={
                            [<Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}><SecondaryCard/></Col>,
                            <Col  xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}><SecondaryCard/></Col>,
                            <Col  xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}><SecondaryCard/></Col>,
                            <Col  xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}><SecondaryCard/></Col>,
                            <Col  xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}><SecondaryCard/></Col>,
                            <Col  xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}><SecondaryCard/></Col>]
                        }/>
                </Row>
                <ExtraNews>
                    <Button className={'button'} type="primary">Еще</Button>
                </ExtraNews>
            </PageContainer>
        </NewsPageBlock>
    )

}