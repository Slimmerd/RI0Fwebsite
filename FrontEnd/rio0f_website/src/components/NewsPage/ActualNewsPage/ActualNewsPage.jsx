import React, {useEffect} from 'react'
import {ActualNewsPageNaming} from "./Blocks/Naming_actualnewspage";
import {ActualNewsPagePicture} from "./Blocks/Picture_actualnewspage";
import {ActualNewsPageText} from "./Blocks/Text_actualnewspage";
import {ActualNewsPagePreviousNews} from "./Blocks/PreviousNews_actualnewspage";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getParticularNews} from "../../../redux/actNews-reducer";
import {getNews} from "../../../redux/news-reducer";

export const ActualNewsPage = () => {
    let params = useParams()
    const ActNews = useSelector((state) => state.actNewsPage)
    const news = useSelector((state) => state.newsPage.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getParticularNews(params.url))
        console.warn('actnewspage', news)
        dispatch(getNews())
    }, [dispatch, params.url])

    return (
        <div>
            <ActualNewsPageNaming news={ActNews}/>
            {ActNews.img ? <ActualNewsPagePicture Photo={ActNews.img}/> : null}
            <ActualNewsPageText news={ActNews}/>
            {news.length === 0 ? null : <ActualNewsPagePreviousNews news={news}/>}
        </div>

    )
}
