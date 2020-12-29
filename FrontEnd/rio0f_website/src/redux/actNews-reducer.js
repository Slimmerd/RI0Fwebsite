import {AuthAPI, NewsAPI} from "../api/api";
import {notificationWindow} from "../utils/notificationWindow";

const SET_ACT_NEWS = 'SET_ACT_NEWS';
const SET_ACT_NAMES = 'SET_ACT_NAMES';

let initialState =
    {
        status: null
    };

const ActNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACT_NEWS: {
            return {
                ...state, ...action.payload
            };
        }
        case SET_ACT_NAMES: {
            return {
                ...state, ...action.payload
            };
        }

        default:
            return state;
    }
};

export const setNews = (name_ru, name_en, text_ru, text_en, img, date, url, author) =>
    ({
        type: SET_ACT_NEWS, payload: {name_ru, name_en, text_ru, text_en, img, date, url, author, status: true}
    });
export const setNames = (author_ru, author_en) =>
    ({
        type: SET_ACT_NAMES, payload: {author_ru, author_en}
    });

//Thunks

export const getParticularNews = (url) => async (dispatch) => {
    let news_response = await NewsAPI.getParticularNews(url)
    let name_response = await AuthAPI.getNames(news_response.data.author)

    if (news_response.status !== 404 || name_response.status !== 404) {
        dispatch(setNews(news_response.data.name_ru, news_response.data.name_en, news_response.data.text_ru, news_response.data.text_en, news_response.data.img, news_response.data.date, news_response.data.url, news_response.data.author))
        dispatch(setNames(name_response.data.author_ru, name_response.data.author_en))
    } else {
        return Promise.reject(news_response.data.message)
    }
}

// RETURN NAMES FOR ADMIN PAGE
export const getNames = id => async (dispatch) => {
    let response = await AuthAPI.getNames(id)

    if (response.status === 202) {
        dispatch(setNames(response.data.author_ru, response.data.author_en))
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        notificationWindow('error',
            'Произошла ошибка во время загрузки',
            ErrorMessage,
            'bottomLeft',
            10)
    }

}


export default ActNewsReducer;