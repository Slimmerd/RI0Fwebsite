import {ChatAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_COMMENTS = 'SET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const TGL_IS_FETCHING = 'TGL_IS_FETCHING';
const FOLLOW_IS_FETCHING = 'FOLLOW_IS_FETCHING';

let initialState =
    {};

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return {
                ...state, comments: [...action.comments]
            };
        }
        case ADD_COMMENT: {
            return {
                ...state, comments: [...state.comments, ...action.payload]
            };
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

export const setComments = (comments) =>
    ({
        type: SET_COMMENTS, comments
    });

export const addComment = (comment) =>
    ({
        type: ADD_COMMENT, comment
    });


//Thunks
export const getComments = () => async (dispatch) => {
    let data = await ChatAPI.getComments()

    dispatch(setComments(data.data))
}

export const postComment = (name, call, email, text) => async (dispatch) => {
    let data = await ChatAPI.postComment(name, call, email, text)

    if (data.status === 201) {
        dispatch(addComment({name, call, email, text}))
    } else {
        let ErrorMessage = data.data.message.length > 0 ? data.data.message : "Undefined error"
        dispatch(stopSubmit("ChatForm", {_error: ErrorMessage}))
        return Promise.reject(ErrorMessage)
    }
}


export default ChatReducer;