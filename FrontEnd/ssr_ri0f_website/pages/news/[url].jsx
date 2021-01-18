import React, {useEffect} from 'react'
import {getParticularNews} from "../../redux/actNews-reducer";
import {getNews} from "../../redux/news-reducer";
import {ActualNewsPageNaming} from "../../components/NewsPage/ActualNewsPage/Blocks/Naming_actualnewspage";
import {ActualNewsPagePicture} from "../../components/NewsPage/ActualNewsPage/Blocks/Picture_actualnewspage";
import {ActualNewsPageText} from "../../components/NewsPage/ActualNewsPage/Blocks/Text_actualnewspage";
import {ActualNewsPagePreviousNews} from "../../components/NewsPage/ActualNewsPage/Blocks/PreviousNews_actualnewspage";
import {useRouter} from "next/router";
import Loading from "../../components/common/Loading";
import {NextSeo} from "next-seo";
import useTranslation from "next-translate/useTranslation";
import {CHOSEN_NEWS_SEO} from "../../utils/SEO_headers";
import {useDispatch, useSelector} from "react-redux";

const ActualNewsPage = () => {
    const news = useSelector(state => state.newsPage.news)
    const ActNews = useSelector(state => state.actNewsPage)

    const router = useRouter()
    const {lang} = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
        dispatch(getParticularNews(router.query.url)).catch(() => router.push('/404'))
    }, [dispatch])

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

export default ActualNewsPage