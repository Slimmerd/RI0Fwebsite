import {AuthAPI, NewsAPI} from "../api/api";

const SET_ACT_NEWS = 'SET_ACT_NEWS';
const SET_ACT_NAMES = 'SET_ACT_NAMES';

let initialState =
    {};

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
        type: SET_ACT_NEWS, payload: {name_ru, name_en, text_ru, text_en, img, date, url, author}
    });
export const setNames = (author_ru, author_en) =>
    ({
        type: SET_ACT_NAMES, payload: {author_ru, author_en}
    });

//Thunks

export const getParticularNews = (url) => async (dispatch) => {
    let data = await NewsAPI.getParticularNews(url)
    let name_data = await AuthAPI.getNames(data.author)


    if (data.status !== 404 || name_data.status !== 404) {
        dispatch(setNews(data.name_ru, data.name_en, data.text_ru, data.text_en, data.img, data.date, data.url, data.author))
        dispatch(setNames(name_data.author_ru, name_data.author_en))
    }
}


export default ActNewsReducer;