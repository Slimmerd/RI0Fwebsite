import {ChatAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_COMMENTS = 'SET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const COMMENT_IS_FETCHING = 'COMMENT_IS_FETCHING';

let initialState =
    {
        comments: [],
        fetching: false
    };

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return {
                ...state, comments: [...action.comments]
            };
        }
        case ADD_COMMENT: {
            return {
                ...state, comments: [action.comment, ...state.comments]
            };
        }

        case DELETE_COMMENT: {
            return {
                comments: state.comments.filter(comments => comments.id !== action.comment.id)
            };
        }
        case COMMENT_IS_FETCHING: {
            return {...state, fetching: action.fetching}
        }

        default:
            return state;
    }
};

export const setComments = (comments) =>
    ({
        type: SET_COMMENTS, comments
    });

export const addComment = (comment) =>
    ({
        type: ADD_COMMENT, comment
    });

export const setDeletedComment = (comment) => ({
    type: DELETE_COMMENT, comment
});

export const setFetching = (fetching) =>
    ({
        type: COMMENT_IS_FETCHING, fetching
    });


//Thunks
export const getComments = () => async (dispatch) => {
    let response = await ChatAPI.getComments()

    dispatch(setComments(response.data))
}

export const postComment = (name, call, email, text) => async (dispatch) => {
    dispatch(setFetching(true)) // Set comment fetching

    let response = await ChatAPI.postComment(name, call, email, text)

    if (response.status === 201) {
        dispatch(addComment({name, call, email, text}))

        notificationWindow('success',
            'Комментарий опубликован',
            `Комментарий был успешно опубликован на сайте`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        dispatch(stopSubmit("ChatForm", {_error: ErrorMessage}))
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


export const deleteComment = (id) => async (dispatch) => {
    dispatch(setFetching(true))

    let response = await ChatAPI.deleteComment(id)

    if (response.status === 201) {

        dispatch(setDeletedComment(response.data.id))
        notificationWindow('success',
            'Комментарий успешно удален',
            `Комментарий был успешно удален`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        notificationWindow('error',
            'Произошла ошибка во время удаления комментария',
            ErrorMessage,
            'bottomLeft',
            10)
        dispatch(setFetching(false))
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false))

}


export default ChatReducer;