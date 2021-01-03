import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

const SendingReqBlock = styled.div`
  min-height: 656px;
  color: #2C3E50;

  .header {
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    padding: 64px 0 20px 0;
  }

  .sub {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    padding-bottom: 73px;
  }

  @media (max-width: 768px) {
    .header {
      font-size: 76px;
      line-height: 86px;
    }
  }

  @media (max-width: 576px) {
    .header {
      font-size: 76px;
      line-height: 86px;
    }

    .sub {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media (max-width: 376px) {
    .header {
      font-size: 54px;
      line-height: 56px;
    }

    .sub {
      font-size: 18px;
      line-height: 20px;
    }
  }
`

const Card = styled.div`
  width: 540px;
  min-height: 226px;

  background: #2C3E50;
  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 15px;

  transition: transform .4s ease-out 0s;

  &:hover {
    transform: scale(1.02);
  }

  .Headers {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #ECF0F1;
    text-align: left;
    padding: 12px 0 0 27px;
  }

  @media (max-width: 576px) {
    width: 425px;

  }

  @media (max-width: 425px) {
    width: 280px;

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


export const QSLPageSendingReq = () => {
    const {t} = useTranslation()

    return (
        <SendingReqBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'header'}>{t('qsl:requirements_block.heading')}</div>
                    <div className={'sub'}>{t('qsl:requirements_block.sub')}</div>
                </FadeInContainer>

                <FadeInContainer>
                    <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 90]} justify={'center'}>
                        <Col>
                            <Card>
                                <div className={'Headers'}>
                                    <HeaderDiv>{t('qsl:requirements_block.Card1.heading')}</HeaderDiv>
                                    <ContentDiv>{t('qsl:requirements_block.Card1.information')}</ContentDiv>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <div className={'Headers'}>
                                    <HeaderDiv>{t('qsl:requirements_block.Card2.heading')}</HeaderDiv>
                                    <ContentDiv>{t('qsl:requirements_block.Card2.information')}</ContentDiv>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </FadeInContainer>
            </div>
        </SendingReqBlock>
    )
}