import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

const SendingReqBlock = styled.div`
    min-height: 756px;
    
    .header{ 
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 96px;
    
    color: #2C3E50;
    
    padding: 64px 0 80px 0;
    }
    
    @media (max-width: 768px){
  .header{
      font-size: 76px;
      line-height: 86px;}
}
    
    @media (max-width: 576px){
  .header{
      font-size: 76px;
      line-height: 86px;}
}

  @media (max-width:425px){
    .header{
      font-size: 54px;
      line-height: 56px;
      }
      .sub{
      font-size: 18px;
    line-height: 20px;
      }
}
`

const Card = styled.div`
    width: 540px;
    min-height: 210px;
    
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

    @media (max-width: 576px){
  width: 425px;
  
}

  @media (max-width:425px){
    width: 280px;
   
     }
`

export const QSLPageSendingReq = () => {
    const { t, i18n } = useTranslation()

    return (
        <SendingReqBlock>
            <div className={'container'}>
                <FadeInContainer>
                <div className={'header'}>{t('qsl:requirements_block.heading')}</div>
                </FadeInContainer>

                <FadeInContainer>
                <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 90]} justify={'center'}>
                    <Col>
                        <Card></Card>
                    </Col>
                    <Col>
                        <Card></Card>
                    </Col>
                </Row>
                </FadeInContainer>

                <FadeInContainer>
                <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 90]} justify={'center'}>
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