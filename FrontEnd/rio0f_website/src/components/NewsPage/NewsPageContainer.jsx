import React from 'react';
import {NewsPage} from "./NewsPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {getNews} from "../../redux/news-reducer";
import {useEffect} from "react";

const NewsPageContainer = (props) => {

    useEffect(() => {
        props.getNews()
    }, []);


    return (
        <NewsPage news={props.news}/>
    );
};

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
    }
};

export default connect(mapStateToProps, {getNews})(NewsPageContainer)
