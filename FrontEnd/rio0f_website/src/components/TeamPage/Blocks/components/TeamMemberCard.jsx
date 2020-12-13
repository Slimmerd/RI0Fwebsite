import React from 'react'
import {Col, Row} from "antd";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import R6MG from "../../../../assets/r6mg.jpg";
import RZ3EC from "../../../../assets/RZ3EC.jpg";
import M0MSV from "../../../../assets/M0MSV.jpg";

const CardShape = styled.div`
    width: 1110px;
    min-height: 550px;
    margin: 0 auto;
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    
     transition: transform .4s ease-out 0s;
       &:hover{
        transform: scale(1.01);
         }
    
    .left,.right{
    height: 550px;
    }
        
    .left{
    background-image: ${props => `url(${props.picture})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => props.picture === M0MSV ? 'left center' : "center center "};
      border-radius: 0 15px 15px 0;
    
     display: flex;
      align-items: center;
        svg{
     margin: 0 auto;
     padding-right: 16px;
     }
    }
    
    .right{
    //now left
    background: #FFFFFF;
    border-radius: 15px 0 0 15px;
    }
    
    @media (max-width: 1200px){
      width: 900px;
      }
      @media (max-width: 992px){
       width: 745px;
          .left{
      border-radius: 0 0 15px 15px;
        }
        .right{
         border-radius: 15px 15px 0 0;
        }
       }
       
     @media (max-width: 768px){
        width: 550px;
        }
    
    @media (max-width: 576px){
    width: 400px;
    .left{
    height: 350px;
    }
    }
    
     @media (max-width:376px){
    width: 270px;
    }
 `
const SmallerCard = styled.div` 
     
     .header,.information{
    text-align: left;
    }
    
    .header{
    padding: 19px 0 10px 0;
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;
    margin-left: 90px;
    
    color: #2C3E50;
    }
        
    .information{
      background: #2C3E50;
      border-radius: 15px;
      width: 505px;
      min-height: 365px;
      margin: 0 auto;
    }
      
    .text{
         font-family: Roboto,sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
        line-height: 84px;
        width: 465px;
        height: 365px;
        color: #ECF0F1;
        word-break: break-word;
        white-space: normal;
      margin: 0 auto;
      
      
     }
     
      @media (max-width: 1200px){
        .header{
        margin-left: 0;
        text-align: center;
        }
      }
       @media (max-width: 576px){
       .header{
        font-size: 64px;
        line-height: 72px;
    }
       
        .information {width: 400px;}
        .text {width: 350px;
        font-size: 40px;
        line-height: 54px;}
    }
    
    @media (max-width:376px){
    
    .information { width: 270px;;}
        .text {width: 250px;
        font-size: 30px;
        line-height: 44px;}
    }
 `
const HeaderDiv = styled.div`
    padding: 20px 103px 18px 0;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    
     @media (max-width: 576px) {
      padding: 20px 40px 18px 0;
      font-size: 24px;
      line-height: 28px;
    }

`
const ContentDiv = styled.div`
    padding: 0 71px 69px 0;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    white-space: pre-line;
    
     @media (max-width: 576px) {
      padding: 20px 40px 18px 0;
      font-size: 18px;
      line-height: 18px;
    }
`

const theme = {
    R6MG: R6MG,
    RZ3EC: RZ3EC,
    M0MSV: M0MSV,
    R6LGT: R6MG,
    RX3F: R6MG
};


export const TeamMemberCard = ({teamMember}) => {
    const {t, i18n} = useTranslation()

    return (
        <div>
            <CardShape picture={theme[teamMember]}>
                <Row>
                    <Col className={'right'} span={15} xs={24} sm={24} md={24} lg={15} xl={15}>
                        <SmallerCard>
                            <div style={{margin: '0 auto'}}>
                                <div className={'header'}>{t('team:card_block.' + teamMember + '.call')}</div>
                                <div className={'information'}>
                                    <div style={{margin: '0 auto'}}>
                                        <div className={'text'}>
                                            <HeaderDiv>{t('team:card_block.' + teamMember + '.name')}</HeaderDiv>
                                            <ContentDiv>{t('team:card_block.' + teamMember + '.information')}</ContentDiv>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SmallerCard>
                    </Col>
                    <Col className={'left'} span={9} xs={24} sm={24} md={24} lg={9} xl={9}>
                        {/*<Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '165px'}}/>*/}

                    </Col>
                </Row>
            </CardShape>
        </div>
    )
}