import {Col, Row, Button} from "antd";
import styled from "styled-components";


const ManagerBlock = styled.div`
    height: 729px;
    background: #ECF0F1;
    color: #2C3E50;
    
    .header{
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;
    
    padding: 29px 0 9px 0;
    }
    
    .sub{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    
    padding-bottom: 73px;
    }
`

const Card = styled.div`
    width: 540px;
    height: 350px;
    background: #2C3E50;
    
    box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 15px;
    
    display: flex;
      align-items: flex-end;
      
    
    .text{
    color: #ECF0F1;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;
    
    text-align: left;
    padding-left: 20px;
    
    
    
    
    }
`


export const QSLPageManager = () =>{
    return(
        <ManagerBlock>
        <div className={'container'}>
            <div className={'header'}>Менеджер</div>
            <div className={'sub'}>С ним можно связаться по поводу отправки QSL карточки</div>
            <Row gutter={[30,0]}>
                <Col>
                    <Card>
                        <div className={'text'}>Данные</div>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className={'text'}>Фото</div>
                    </Card>
                </Col>
            </Row>


        </div>
        </ManagerBlock>
    )
}