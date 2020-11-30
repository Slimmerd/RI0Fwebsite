import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {MainCard} from "./NewsCards/MainCard";
import {SecondaryCard} from "./NewsCards/SecondaryCard";


//Fix: Header

const NewsPageBlock = styled.div`
      background: #ECF0F1;

`


const PageContainer = styled.div`
       width: 100%;
       max-width: 1110px;
       margin: 0 auto;
       text-align: center;

`

const NamingBlock = styled.div`
      height: 319px;
      
      display: flex;
      align-items: center;
    
     
     .header{
     font-family: Oswald;
      font-style: normal;
      font-weight: 500;
      font-size: 96px;
      line-height: 142px;
      
      color: #2C3E50;
      padding-bottom: 20px;
     }
     
     .paragraph{
     font-family: Roboto;
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

`

const ExtraNews = styled.div`
    height: 181px;
    display: flex;
    align-items: center;
    
    
    
    .button{
    width: 300px;
    height: 75px;
   
    border-radius: 15px;
    font-family: Roboto;
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
`

export const NewsPage = () => {
    return (
        <NewsPageBlock>
            <PageContainer>
                <NamingBlock>
                    <div className={'textblock'}>
                        <div className={'header'}>RIØF Новости</div>
                        <div className={'paragraph'}>Последние новости от нашей команды</div>
                    </div>
                </NamingBlock>
                <MainCard/>
                <Row gutter={[30, 48]}>
                    <Col><SecondaryCard/></Col>
                    <Col><SecondaryCard/></Col>
                    <Col><SecondaryCard/></Col>
                </Row>
                <Row gutter={[30, 48]}>
                    <Col><SecondaryCard/></Col>
                    <Col><SecondaryCard/></Col>
                    <Col><SecondaryCard/></Col>
                </Row>
                <ExtraNews>
                    <Button className={'button'} type="primary">Еще</Button>
                </ExtraNews>


            </PageContainer>
        </NewsPageBlock>
    )

}