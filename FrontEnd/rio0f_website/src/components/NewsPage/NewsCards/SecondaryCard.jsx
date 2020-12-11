import React, {useState} from 'react'
import {Col, Row, Skeleton} from "antd";
import styled from "styled-components";
import {Icon, InlineIcon} from '@iconify/react';
import cameraIcon from '@iconify/icons-si-glyph/camera';

const CardShape = styled.div`
      height: 450px;
      width: 350px;
      background: #FFFFFF;
      margin: 0 auto;
      box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
      border-radius: 10px;
      
      transition: transform .4s ease-out 0s;
       &:hover{
        transform: scale(1.02);
         }
    
      .picture{
      height: 157px;
      background: #2C3E50;
      
      display: flex;
      align-items: center;
      border-radius: 10px 10px 0 0;
      
       svg{
     margin: 0 auto;
     padding-right: 0px;
     }
      }
      
    .text{
    color: #34495E;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: start;
    padding: 20px;

    .date{
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    padding-bottom: 10px;
    }
    
    .header{
    color: #2C3E50;
    font-size: 30px;
    line-height: 30px;
    text-align: left;
    padding-bottom: 20px;
    }
    
    .paragraph{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    width: 310px;
    height: 140px;
    
    text-align: left;
    }
    
     .skeletonStyle{
    width: 300px;
    height: 20px;
     border-radius: 5px;
      margin-bottom: 5px;
    }
    
}    
 @media (max-width:374px){
    height: 500px;
    width: 270px;
    .text {
    .paragraph{
    width: 240px;
    }
    .header{
    font-size: 25px;
    line-height: 25px;
    }
    }
    
    }
`

export const SecondaryCard = () => {
    const [loading, setLoading] = useState(false);
    const onChange = () => {
        setLoading(!loading)
    };

    const ParagraphSkeleton = [
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>,
        <Skeleton.Input className={'skeletonStyle'} active={'active'}/>]

    //TODO: Import data from database
    const real_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies ipsum. Sed eget congue velit. Phasellus suscipit, turpis eu molestie vulputate, tellus turpis sagittis ipsum, a aliquam justo magna ac urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies ipsum. Sed eget congue velit. Phasellus suscipit, turpis eu molestie vulputate, tellus turpis sagittis ipsum, a aliquam justo magna ac urna.'
    const real_heading = 'Заголовок новости Заголовок новости Заголовок новости Заголовок новости Заголовок новости'

    return (
        <CardShape>
            <Row className={'picture'}>
                <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '84.09599304199219px'}}/>
            </Row>
            <Row className={'text'}>
                <div style={{margin: '0 auto'}}>
                    <div className={'date'}>{!loading ? '01.01.2000' :
                        <Skeleton.Input style={{width: 100, height: '20px', borderRadius: '5px'}}
                                        active={'active'}/>}</div>
                    <div className={'header'}>{!loading ? `${real_heading.substring(0,35)}...`:
                        <Skeleton.Input style={{width: 250, height: '30px', borderRadius: '5px'}}
                                        active={'active'}/>}</div>
                    <div className={'paragraph'}>{ !loading ? `${real_text.substring(0,185)}...` : ParagraphSkeleton}
                    </div>
                </div>
            </Row>
        </CardShape>
    )
}