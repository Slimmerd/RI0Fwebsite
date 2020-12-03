import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../../utils/FadeInAnimation";

const SendingReqBlock = styled.div`
    height: 756px;
    
    .header{ 
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;
    
    color: #2C3E50;
    
    padding: 4px 0 40px 0;
    }
`

const Card = styled.div`
    width: 540px;
    height: 210px;
    
    background: #2C3E50;
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    
    transition: transform .4s ease-out 0s;
       &:hover{
        transform: scale(1.02);
         }
    
    .Headers{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #ECF0F1;
    text-align: left;
    padding: 12px 0 0 27px;
    }
`

export const QSLPageSendingReq = () => {
    return (
        <SendingReqBlock>
            <div className={'container'}>
                <FadeInContainer>
                <div className={'header'}>Условия отправки</div>
                </FadeInContainer>

                <FadeInContainer>
                <Row gutter={[30, 90]} justify={'center'}>
                    <Col>
                        <Card></Card>
                    </Col>
                    <Col>
                        <Card></Card>
                    </Col>
                </Row>
                </FadeInContainer>

                <FadeInContainer>
                <Row gutter={[30, 90]} justify={'center'}>
                    <Col>
                        <Card></Card>
                    </Col>
                    <Col>
                        <Card></Card>
                    </Col>
                </Row>
                </FadeInContainer>
            </div>
        </SendingReqBlock>
    )
}