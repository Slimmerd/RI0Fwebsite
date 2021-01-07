import {Col, Row} from "antd";
import styled from "styled-components";
import {FadeInContainer} from "../../common/FadeInAnimation";
import {useTranslation} from "react-i18next";

const RZ3EC = '/static/assets/RZ3EC.webp'

const ManagerBlock = styled.div`
  min-height: 729px;
  background: #ECF0F1;
  color: #2C3E50;
  box-shadow: 0 2.32131px 11.6066px 4.64262px rgba(0, 0, 0, 0.1);

  .header {
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    padding: 29px 0 20px 0;
  }

  .sub {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    padding-bottom: 73px;
  }

  .cardings {
    padding-bottom: 50px;
  }

  @media (max-width: 786px) {
    .header {
      font-size: 76px;
      line-height: 86px;
    }
  }

  @media (max-width: 576px) {
    .header {
      font-size: 54px;
      line-height: 56px;
    }

    .sub {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media (max-width: 376px) {
    .header {
      font-size: 42px;
      line-height: 48px;
    }

    .sub {
      font-size: 16px;
      line-height: 18px;
    }
  }
`

const Card = styled.div`
  width: 540px;
  height: 350px;
  background: #2C3E50;

  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 15px;

  display: flex;
  align-items: center;

  transition: transform .4s ease-out 0s;

  &:hover {
    transform: scale(1.02);
  }


  &.picture {

    background-image: url(${RZ3EC});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }


  .text {
    color: #ECF0F1;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 112px;

    text-align: left;

    padding: 25px;

    a {
      color: #ECF0F1;
    }
  }

  @media (max-width: 768px) {
    .text {
      font-size: 76px;
      line-height: 86px;
    }
  }

  @media (max-width: 576px) {
    width: 425px;
    .text {
      font-size: 76px;
      line-height: 86px;
    }
  }

  @media (max-width: 425px) {
    width: 280px;
    .text {
      font-size: 54px;
      line-height: 56px;
    }

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
const DateDiv = styled.div`

`

export const QSLPageManager = () => {
    const {t} = useTranslation()

    return (
        <ManagerBlock>
            <div className={'container'}>
                <FadeInContainer>
                    <div className={'header'}>{t('qsl:manager_block.heading')}</div>
                    <div className={'sub'}>{t('qsl:manager_block.sub')}</div>
                </FadeInContainer>
                <FadeInContainer>
                    <div className={'cardings'}>
                        <Row gutter={[{xs: 0, sm: 30, md: 30, lg: 30}, 30]} justify={'center'}>
                            <Col>
                                <Card>
                                    <div className={'text'}>
                                        <DateDiv>{t('qsl:manager_block.call')}</DateDiv>
                                        <HeaderDiv>{t('qsl:manager_block.name')}</HeaderDiv>
                                        <ContentDiv>Email: <a
                                            href="mailto:rz3ec@yandex.ru">rz3ec@yandex.ru</a></ContentDiv>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card className={'picture'}>

                                </Card>
                            </Col>
                        </Row>
                    </div>
                </FadeInContainer>
            </div>
        </ManagerBlock>
    )
}