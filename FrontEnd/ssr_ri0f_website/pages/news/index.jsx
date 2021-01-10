import React from 'react'
import styled from "styled-components";
import useTranslation from 'next-translate/useTranslation'
import {getNews} from "../../redux/news-reducer";
import {FadeInContainer} from "../../components/common/FadeInAnimation";
import NewsPageStab from "../../components/NewsPage/NewsCards/NewsPageStab";
import NewsPageCards from "../../components/NewsPage/NewsCards/NewsPageCards";
import store from "../../redux/redux-store";
import Loading from "../../components/common/Loading";

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

const NewsPage = ({news}) => {

    const {t} = useTranslation()

    if (!news) {
        return (
            <Loading/>
        )
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
                {/*Cards*/}
                {news.length === 0 ? <NewsPageStab/> : <NewsPageCards news={news}/>}
                <ExtraNews/>
            </PageContainer>
        </NewsPageBlock>
    )
}

export const getServerSideProps = async () => {
    const {dispatch, getState} = store
    await dispatch(getNews())
    const news = getState().newsPage.news

    return {
        props: {news},
    }

}


export default NewsPage