import {NewsAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {UserLogOut} from "./auth-reducer";

const SET_NEWS = 'SET_NEWS';
const CREATE_NEWS = 'CREATE_NEWS';
const DELETE_NEWS = 'DELETE_NEWS';
const TGL_IS_FETCHING = 'TGL_IS_FETCHING';
const FOLLOW_IS_FETCHING = 'FOLLOW_IS_FETCHING';

let initialState =
    {
        news: []
    };

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state, news: [...action.news]
            };
        }
        case CREATE_NEWS: {
            return {...state, ...action.payload}
        }
        case DELETE_NEWS: {
            return {...state, totalNewsCount: action.count}
        }
        case TGL_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOW_IS_FETCHING: {
            return {
                ...state,
                followingFetching: action.isFetching ?
                    [...state.followingFetching, action.userID] :
                    state.followingFetching.filter(id => id !== action.userID)
            }
        }

        default:
            return state;
    }
};

export const setNews = (news) =>
    ({
        type: SET_NEWS, news
    });

export const deleteNews = (newsID) => ({
    type: DELETE_NEWS,
});

export const createNewsData = (name_ru, name_en, text_ru, text_en, img) => (
    {
        type: CREATE_NEWS, payload: {name_ru, name_en, text_ru, text_en, img}
    });


//Thunks
export const getNews = () => async (dispatch) => {
    let data = await NewsAPI.getNews();
    dispatch(setNews(data.data));
};

export const CreateNews = (name_ru, name_en, text_ru, text_en, img) => async (dispatch) => {
    let response = await NewsAPI.postNews(name_ru, name_en, text_ru, text_en, img)

    if (response.status === 201) {
        dispatch(createNewsData(name_ru, name_en, text_ru, text_en, img))
    } else if (response.status === 401) {
        dispatch(UserLogOut())
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        dispatch(stopSubmit("NewsForm", {_error: ErrorMessage}))
        return Promise.reject(ErrorMessage)
    }

}

// const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
//     dispatch(setFollowFetching(true, userID));
//
//     let response = await apiMethod(userID);
//     if (response.data.resultCode === 0) {
//         dispatch(actionCreator(userID))
//     }
//     dispatch(setFollowFetching(false, userID));
// }

export const follow = (userID) => {

    return async (dispatch) => {

        // followUnfollowFlow(dispatch, userID, UserAPI.follow.bind(UserAPI), followSuccess)
    };
};

export default NewsReducer;