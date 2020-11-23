import {Col, Row, Button} from "antd";
import styled from "styled-components";


const MethodsPageContainer = styled.div`
      height: 1009px;
`

const BlockHeader = styled.div`
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;
    color: #2C3E50;
    
    padding: 22px 0 94px 0;
`

const Card = styled.div`
    width: 540px;
    height: 250px;
    
    background: #2C3E50;
    border: 0.5px solid #BDC3C7;
    box-sizing: border-box;
    
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    
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

export const DonatePageMethods = () => {
    return (
        <MethodsPageContainer>
        <div className={'container'}>
            <BlockHeader>Способы Пожертвовать</BlockHeader>
            <Row justify={'center'} gutter={[30, 90]}>
                <Col>
                    <Card>
                        <div className={'Headers'}>Paypal:</div>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className={'Headers'}>Банковская карта:</div>
                    </Card>
                </Col>
            </Row>
            <Row justify={'center'} gutter={[30, 90]}>
                <Col>
                    <Card>
                        <div className={'Headers'}>Банковский счет:</div>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className={'Headers'}>Что-то еще?</div>
                    </Card>
                </Col>
            </Row>


        </div>
        </MethodsPageContainer>
    )

}