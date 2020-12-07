import React from 'react'
import styled from "styled-components";
import {Col, Row} from "antd";
import {FadeInContainer} from "../../../../utils/FadeInAnimation";

const Card = styled.div`
      width: 1110px;
      min-height: 200px;
      border-radius: 10px;
     
      box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
      
      transition: transform .4s ease-out 0s;
       &:hover{
        transform: scale(1.02);
         }
 
      .author,.comment{
      border-radius: 10px 0 0 10px;
      min-height: 200px;
      background: #2C3E50;
      font-family: Roboto,sans-serif;
        font-style: normal;
        font-weight: 500;
      }
      
      .author{
        display:flex;
        align-items: center;
        
      .call,.name{
        color: #FFFFFF;
      }
      
        .call{
        font-size: 64px;
        line-height: 75px;
        text-align: left;
      }
        
        .name{
        font-size: 36px;
        line-height: 42px;
         text-align: left;
        }
      }
      
      .comment{
        border-radius: 0 10px 10px 0;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        font-weight: 400;
               
        .text{
        margin: 10px auto 10px auto;
        width: 635px;
        text-align: left;
        
        word-break: break-word;
        white-space: normal;
        
        font-size: 24px;
        line-height: 28px;
        color: #2C3E50;
        }
      }
      
      @media (max-width: 1200px){
      width: 900px;
      }
      @media (max-width: 992px){
       width: 745px;
       .comment .text{
        width: 500px;
       }
       
       .author{
       .call{
        font-size: 48px;
        line-height: 65px;
      }
        
        .name{
        font-size: 28px;
        line-height: 32px;
        }
       }
       }
      @media (max-width: 768px){
        width: 550px;
      
         .comment .text{
        width: 350px;
        font-size: 20px;
        line-height: 22px;
       }
    }
    
      @media (max-width: 576px){
    width: 400px;
    .author{
    border-radius: 10px 10px 0 0;
    .call,.name{
    text-align: center;
    }
    }
    
    .comment{
    border-radius: 0 0 10px 10px;
   
    .text{
        width: 300px;
        font-size: 20px;
        line-height: 22px;
       }
    }
     } 
     
     @media (max-width:376px){
    width: 270px;
    
    .comment{
     .text{
        width: 250px;
        font-size: 20px;
        line-height: 22px;
       }
    }
     } 
   
`

export const CommentCard = () => {
    return (
        <FadeInContainer>
        <Card>
            <Row justify={'center'}>
                <Col span={6} xs={24} sm={6} md={6} lg={6} xl={6} className={'author'}>
                    <div style={{margin: '0 auto'}}>
                        <div className={'call'}>R6RR</div>
                        <div className={'name'}>Иван</div>
                    </div>
                </Col>
                <Col span={18} xs={24} sm={18} md={18} lg={18} xl={18} className={'comment'}>
                    <div className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies
                        ipsum. Sed eget congue velit. Phasellus suscipit, turpis eu molestie vulputate, tellus turpis
                        sagittis ipsum, a aliquam justo magna ac urna. Nulla dapibus tincidunt eleifend.
                    </div>

                </Col>
            </Row>
        </Card>
        </FadeInContainer>
    )
}