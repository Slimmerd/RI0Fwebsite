import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_USER_DATA = '/auth/SET_USER_DATA';
const SET_AUTH_DATA = '/auth/SET_AUTH_DATA';
const AUTH_IS_FETCHING = '/auth/AUTH_IS_FETCHING';
const User = JSON.parse(localStorage.getItem("user"));

let initialState =
    {
        id: null,
        fullname: null,
        isAuth: !!User,
        fetching: false
    };


// Action Creator
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,

            };
        }

        case SET_AUTH_DATA: {
            return {
                ...state, isAuth: action.isAuth
            }
        }

        case AUTH_IS_FETCHING: {
            return {
                ...state, fetching: action.fetching
            }
        }

        default:
            return state;
    }
};

export const setUserData = (id, fullname, isAuth) => (
    {
        type: SET_USER_DATA, payload: {id, fullname, isAuth}
    });

export const setUserAuth = (isAuth) => (
    {
        type: SET_AUTH_DATA, isAuth
    });

export const setFetching = (fetching) =>
    ({
        type: AUTH_IS_FETCHING, fetching
    });


//Thunks
export const AuthStatus = () => async (dispatch) => {
    let response = await AuthAPI.me()

    if (response.status === 201) {
        dispatch(setUserAuth(true))
    } else if (response.status === 401) {
        dispatch(setUserAuth(false))
    }
}

export const UserLogin = (email, password) => async (dispatch) => {
    dispatch(setFetching(true)) // Set login fetching

    let response = await AuthAPI.login(email, password)

    if (response.status === 200) {
        let {token, userId, fullname} = response.data;
        dispatch(setUserData(userId, fullname, !!token))
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        dispatch(stopSubmit("LoginForm", {_error: ErrorMessage}))
        notificationWindow('error',
            'Произошла ошибка',
            ErrorMessage,
            'topRight',
            10)

        dispatch(setFetching(false)) // Disable login fetching
        return Promise.reject(ErrorMessage)
    }

    dispatch(setFetching(false)) // Disable login fetching
}

export const UserLogOut = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response) {
        dispatch(setUserData(null, null, false))
    }
}

export default AuthReducer;