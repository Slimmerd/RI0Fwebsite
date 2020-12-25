import {ChatAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_COMMENTS = 'SET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
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

export const setFetching = (fetching) =>
    ({
        type: COMMENT_IS_FETCHING, fetching
    });


//Thunks
export const getComments = () => async (dispatch) => {
    let data = await ChatAPI.getComments()

    dispatch(setComments(data.data))
}

export const postComment = (name, call, email, text) => async (dispatch) => {
    dispatch(setFetching(true)) // Set comment fetching

    let data = await ChatAPI.postComment(name, call, email, text)

    if (data.status === 201) {
        dispatch(addComment({name, call, email, text}))
    } else {
        let ErrorMessage = data.data.message.length > 0 ? data.data.message : "Undefined error"
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


export default ChatReducer;