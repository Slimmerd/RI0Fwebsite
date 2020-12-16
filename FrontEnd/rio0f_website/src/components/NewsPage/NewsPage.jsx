import React, {useEffect, useState} from 'react'
import {Col, Row, Button} from "antd";
import styled from "styled-components";
import {MainCard} from "./NewsCards/MainCard";
import {SecondaryCard} from "./NewsCards/SecondaryCard";
import {FadeInContainer} from "../common/FadeInAnimation";
import {NewsAnimContainer} from "../common/NewsCardAnimation";
import {useTranslation} from "react-i18next";

const NewsPageBlock = styled.div`
  background: #ECF0F1;
`
const PageContainer = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  text-align: center;

  .test {
    margin-bottom: 50px !important;
  }

  @media (max-width: 1200px) {
    max-width: 900px
  }

  @media (max-width: 992px) {
    max-width: 745px
  }


  @media (max-width: 768px) {
    max-width: 550px
  }

  @media (max-width: 576px) {
    max-width: 400px
  }

  @media (max-width: 360px) {
    max-width: 270px
  }
`
const NamingBlock = styled.div`
  height: 319px;
  display: flex;
  align-items: center;

  .header {
    font-family: Oswald, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    color: #2C3E50;
    padding-bottom: 20px;
  }

  .paragraph {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #2C3E50;
  }

  .textblock {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding-top: 31px;
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

  // @media (max-width:375px){
  //    .header{
  //      font-size: 42px;
  //      line-height: 48px;
  //      }
  //      .sub{
  //      font-size: 16px;
  //    line-height: 18px;
  //      }
  //}

`
const ExtraNews = styled.div`
  height: 181px;
  display: flex;
  align-items: center;

  .button {
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    width: 300px;
    height: 75px;
    overflow: hidden;
    border-radius: 15px 15px 15px 15px !important;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    margin: 0 auto;
    color: #ECF0F1;
  }

  .ant-btn.ant-btn-primary,
  .ant-btn-primary {
    background-color: #2C3E50;
    border-color: #2c3e50;

    &:hover {
      background: hsl(210, 29%, 40%) !important;
      border-color: hsl(210, 29%, 40%) !important;
    }
  }

  .ant-btn > .ant-btn-loading-icon .anticon {
    padding-right: 0 !important;
  }

  .ant-btn-loading-icon {
    padding-right: 25px !important;
  }
`

//TODO: Put latest news on main card and others to secondary cards

export const NewsPage = ({news, ...props}) => {
    const [isSize, setSize] = useState(window.innerWidth);
    const breakpoint = 768
    const {t, i18n} = useTranslation()

    useEffect(() => {
        window.addEventListener("resize", () => setSize(window.innerWidth));
    }, []);

    const [loading, setLoading] = useState(false)

    const OnClick = () => {
        setLoading(!loading)
    }

    const LastNews = () => {

        const Last = isSize > breakpoint ? <MainCard news={news[0]}/> :
            <div className={'test'}><SecondaryCard news={news[0]}/></div>

        return Last

    }

    return (
        <NewsPageBlock>
            <PageContainer>
                {/*Naming block*/}
                <FadeInContainer>
                    <NamingBlock>
                        <div className={'textblock'}>
                            <div className={'header'}>{t('news:title')}</div>
                            <div className={'paragraph'}>{t('news:sub')}</div>
                        </div>
                    </NamingBlock>
                </FadeInContainer>
                {/*Main card*/}
                <FadeInContainer>
                    <LastNews/>
                </FadeInContainer>
                {/*Other News card*/}
                <Row gutter={[{xs: 0, sm: 24, md: 24, lg: 24}, 48]} align={'center'}>
                    <NewsAnimContainer
                        items={
                            news.slice(1).map((n, i) => <Col key={i} xs={24} sm={24} md={24} lg={12} xl={8}
                                                             xxl={8}><SecondaryCard news={n}/></Col>)
                        }/>
                </Row>
                <ExtraNews>
                    {/*    <Button className={'button'} type="primary" loading={loading}*/}
                    {/*            onClick={OnClick}>{t('news:button')}</Button>*/}
                </ExtraNews>
            </PageContainer>
        </NewsPageBlock>
    )
}