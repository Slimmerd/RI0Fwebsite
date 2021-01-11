import React, {useEffect} from 'react'
import {getParticularNews} from "../../redux/actNews-reducer";
import {getNews} from "../../redux/news-reducer";
import {ActualNewsPageNaming} from "../../components/NewsPage/ActualNewsPage/Blocks/Naming_actualnewspage";
import {ActualNewsPagePicture} from "../../components/NewsPage/ActualNewsPage/Blocks/Picture_actualnewspage";
import {ActualNewsPageText} from "../../components/NewsPage/ActualNewsPage/Blocks/Text_actualnewspage";
import {ActualNewsPagePreviousNews} from "../../components/NewsPage/ActualNewsPage/Blocks/PreviousNews_actualnewspage";
import {useRouter} from "next/router";
import Loading from "../../components/common/Loading";
import store from "../../redux/redux-store";
import {NextSeo} from "next-seo";
import useTranslation from "next-translate/useTranslation";
import {CHOSEN_NEWS_SEO} from "../../utils/SEO_headers";

const ActualNewsPage = ({news, ActNews}) => {

    const router = useRouter()
    const {lang} = useTranslation()

    useEffect(() => {
        if (ActNews === null) return router.push('/404')

    }, [])

    if (!ActNews) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            <NextSeo {...CHOSEN_NEWS_SEO(lang, ActNews)}/>
            <ActualNewsPageNaming news={ActNews}/>
            {ActNews.img ? <ActualNewsPagePicture Photo={ActNews.img}/> : null}
            <ActualNewsPageText news={ActNews}/>
            {news.length < 3 ? null : <ActualNewsPagePreviousNews news={news}/>}
        </>

    )
}

export const getServerSideProps = async ({query}) => {
    const {dispatch, getState} = store
    const news = getState().newsPage.news
    let ActNews = getState().actNewsPage

    await dispatch(getNews())
    await dispatch(getParticularNews(query.url)).then(() => {
        ActNews = getState().actNewsPage
    }).catch(() => {
        return ActNews = null
    })

    // JSON.parse -> Fixes bug with - Img Undefined
    return {props: {news, ActNews: JSON.parse(JSON.stringify(ActNews))}};
};

export default ActualNewsPage