import {Col, Row} from "antd";
import styled from "styled-components";
import {Icon, InlineIcon} from '@iconify/react';
import cameraIcon from '@iconify/icons-si-glyph/camera';

const CardShape = styled.div`
    height: 370px;
    width: 1110px;
    border-radius: 10px;
    
    margin-bottom: 50px;

    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
   
    
    .picture,.text{
    height: 370px;
    
    }
    
    .picture{
    background: #2C3E50;
     display: flex;
      align-items: center;
      border-radius: 10px 0px 0px 10px;
      svg{
      margin: 0 auto;
      }
      
  
    }
    
    .text{
    background: #FFFFFF;
    border-radius: 0px 10px 10px 0px;
    color: #34495E;
    
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;

    display: flex;
    align-items: start;

    
    .date{
    
font-size: 14px;
line-height: 16px;
text-align: left;
padding: 19px 0 10px 0;
 
    }
    
    .header{
    color: #2C3E50;
   
    font-size: 36px;
    line-height: 42px;
    text-align: left;
    
    padding-bottom: 30px;
    
    }
    
    .paragraph{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    
    width: 400px;
    height: 215px;
    
    text-align: left;
    }
    
    }
`


export const MainCard = () => {
    return (
        <CardShape>
            <div className={'container'}>
                <Row>
                    <Col className={'picture'} span={14}>
                        <Icon icon={cameraIcon} style={{color: '#ecf0f1', fontSize: '118.39999389648438px'}}/>
                    </Col>
                    <Col span={10} className={'text'}>
                        <div style={{margin: '0 auto'}}>
                        <div className={'date'}>01.01.2000</div>
                        <div className={'header'}>Заголовок новости</div>
                        <div className={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies ipsum. Sed
                            eget congue velit. Phasellus suscipit, turpis eu molestie vulputate, tellus turpis sagittis
                            ipsum, a aliquam justo magna ac urna. Nulla dapibus tincidunt eleifend.
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </CardShape>


    )

}