import {SponsorsAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_SPONSORS = 'SET_SPONSORS';
const ADD_SPONSOR = 'ADD_SPONSOR';
const DELETE_SPONSOR = 'DELETE_SPONSOR';
const POST_IS_FETCHING = 'POST_IS_FETCHING';

let initialState =
    {
        posts: [],
        fetching: false
    };

const SponsorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPONSORS: {
            return {
                ...state, posts: [...action.posts]
            };
        }
        case ADD_SPONSOR: {
            return {
                ...state, posts: [action.post, ...state.posts]
            };
        }
        case DELETE_SPONSOR: {
            return {
                ...state, posts: [...state.posts.filter(posts => posts._id !== action.post)]
            };
        }
        case POST_IS_FETCHING: {
            return {...state, fetching: action.fetching}
        }

        default:
            return state;
    }
};

export const setSponsors = (posts) =>
    ({
        type: SET_SPONSORS, posts
    });

export const addSponsor = (post) =>
    ({
        type: ADD_SPONSOR, post
    });

export const setDeletedSponsor = (id) => ({
    type: DELETE_SPONSOR, id
});

export const setFetching = (fetching) =>
    ({
        type: POST_IS_FETCHING, fetching
    });


//Thunks
export const getSponsors = () => async (dispatch) => {
    let response = await SponsorsAPI.getSponsors()

    if (response && response.status === 201) {
        dispatch(setSponsors(response.data))
    } else {
        let ErrorMessage = response && response.data.message?.length > 0 ? response.data.message : 'Sponsors service unavailable'
        notificationWindow('error',
            'Error/Ошибка',
            ErrorMessage,
            'bottomLeft',
            10)
    }
}

export const postSponsor = (name, category, img) => async (dispatch) => {
    dispatch(setFetching(true)) // Set comment fetching

    let response = await SponsorsAPI.postSponsor(name, category, img)

    if (response && response.status === 201) {
        dispatch(getSponsors())

        notificationWindow('success',
            'Спонсор опубликован',
            `Спонсор был успешно опубликован на сайте`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response && response.data.message?.length > 0 ? response.data.message : "Service unavailable"
        dispatch(stopSubmit("GalleryForm", {_error: ErrorMessage}))
        notificationWindow('error',
            'Произошла ошибка',
            ErrorMessage,
            'bottomLeft',
            10)
        dispatch(setFetching(false))
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false)) // Disable comment fetching
}

export const deleteSponsor = (id) => async (dispatch) => {
    dispatch(setFetching(true))

    let response = await SponsorsAPI.deleteSponsor(id)

    if (response && response.status === 201) {

        dispatch(setDeletedSponsor(response.data.id))
        notificationWindow('success',
            'Публикация успешно удалена',
            `Публикация была успешно удален`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response && response.data.message?.length > 0 ? response.data.message : "Service unavailable"
        notificationWindow('error',
            'Произошла ошибка во время удаления спонсора',
            ErrorMessage,
            'bottomLeft',
            10)
        dispatch(setFetching(false))
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false))

}


export default SponsorsReducer;