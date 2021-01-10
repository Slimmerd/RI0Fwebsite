import {GalleryAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
// const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const POST_IS_FETCHING = 'POST_IS_FETCHING';

let initialState =
    {
        posts: [],
        fetching: false
    };

const GalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state, posts: [...action.posts]
            };
        }
        case ADD_POST: {
            return {
                ...state, posts: [action.post, ...state.posts]
            };
        }
        case DELETE_POST: {
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

export const setPosts = (posts) =>
    ({
        type: SET_POSTS, posts
    });

export const addPost = (post) =>
    ({
        type: ADD_POST, post
    });

export const setDeletedPost = (post) => ({
    type: DELETE_POST, post
});

export const setFetching = (fetching) =>
    ({
        type: POST_IS_FETCHING, fetching
    });


//Thunks
export const getPosts = () => async (dispatch) => {
    let response = await GalleryAPI.getPosts()

    if (response && response.status === 201) {
        dispatch(setPosts(response.data))
    } else {
        let ErrorMessage = response && response.data.message.length > 0 ? response.data.message : 'Gallery service unavailable'
        notificationWindow('error',
            'Error/Ошибка',
            ErrorMessage,
            'bottomLeft',
            10)
    }
}

export const postPost = (name_ru, name_en, images) => async (dispatch) => {
    dispatch(setFetching(true)) // Set comment fetching

    let response = await GalleryAPI.postPost(name_ru, name_en, images)

    if (response && response.status === 201) {
        // dispatch(addPost({name_ru, name_en, images}))
        dispatch(getPosts())

        notificationWindow('success',
            'Фотосет опубликован',
            `Фотосет был успешно опубликован на сайте`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response && response.data.message.length > 0 ? response.data.message : "Service unavailable"
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


export const deletePost = (id) => async (dispatch) => {
    dispatch(setFetching(true))

    let response = await GalleryAPI.deleteGalleryPost(id)

    if (response && response.status === 201) {

        dispatch(setDeletedPost(response.data.id))
        notificationWindow('success',
            'Публикация успешно удалена',
            `Публикация была успешно удален`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response && response.data.message.length > 0 ? response.data.message : "Service unavailable"
        notificationWindow('error',
            'Произошла ошибка во время удаления публикации',
            ErrorMessage,
            'bottomLeft',
            10)
        dispatch(setFetching(false))
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false))

}


export default GalleryReducer;