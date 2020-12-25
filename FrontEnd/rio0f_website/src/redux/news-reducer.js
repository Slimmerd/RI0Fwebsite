import {NewsAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {UserLogOut} from "./auth-reducer";
import {notificationWindow} from "../utils/notificationWindow";

const SET_NEWS = 'SET_NEWS';
const CREATE_NEWS = 'CREATE_NEWS';
const DELETE_NEWS = 'DELETE_NEWS';
const NEWS_IS_FETCHING = 'NEWS_IS_FETCHING';

let initialState =
    {
        news: [],
        fetching: false
    };

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state, news: [...action.news]
            };
        }
        case CREATE_NEWS: {
            return {...state, news: [action.news, ...state.news]}
        }
        case DELETE_NEWS: {
            return {news: state.news.filter(news => news.id !== action.news.id)}
        }
        case NEWS_IS_FETCHING: {
            return {...state, fetching: action.fetching}
        }

        default:
            return state;
    }
};

export const setNews = (news) =>
    ({
        type: SET_NEWS, news
    });

export const setDeletedNews = (news) => ({
    type: DELETE_NEWS, news
});

export const setFetching = (fetching) =>
    ({
        type: NEWS_IS_FETCHING, fetching
    });

export const createNewsData = (news) => (
    {
        type: CREATE_NEWS, news
    });


//Thunks
export const getNews = () => async (dispatch) => {
    let data = await NewsAPI.getNews();
    dispatch(setNews(data.data));
};

export const CreateNews = (name_ru, name_en, text_ru, text_en, img) => async (dispatch) => {
    dispatch(setFetching(true)) // Set news fetching

    let response = await NewsAPI.postNews(name_ru, name_en, text_ru, text_en, img)

    if (response.status === 201) {
        dispatch(createNewsData({name_ru, name_en, text_ru, text_en, img}))
        notificationWindow('success',
            'Новость успешно опубликована',
            `Новость ${name_ru}, успешно опубликована на сайте`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        dispatch(stopSubmit("NewsForm", {_error: ErrorMessage}))
        notificationWindow('error',
            'Произошла ошибка во время публикации новости',
            ErrorMessage,
            'bottomLeft',
            10)
        dispatch(setFetching(false)) // Disable news fetching
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false)) // Disable news fetching
}

export const DeleteNews = (url) => async (dispatch) => {
    let response = await NewsAPI.deleteNews(url)


    if (response.status === 201) {
        dispatch(setDeletedNews(response.data.id))
        notificationWindow('success',
            'Новость успешно удалена',
            `Новость была успешно удалена`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        notificationWindow('error',
            'Произошла ошибка во время публикации новости',
            ErrorMessage,
            'bottomLeft',
            10)

        return Promise.reject(ErrorMessage)
    }

}


export default NewsReducer;