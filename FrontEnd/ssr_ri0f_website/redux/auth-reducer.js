import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";
import Cookies from "js-cookie";

const SET_USER_DATA = '/auth/SET_USER_DATA';
const SET_AUTH_DATA = '/auth/SET_AUTH_DATA';
const AUTH_IS_FETCHING = '/auth/AUTH_IS_FETCHING';

const cookie = Cookies.get('user')
const User = () => {
    if (cookie) {
        return JSON.parse(cookie)
    }
}


let initialState =
    {
        id: User ? User.userId : null,
        name_ru: User ? User.name_ru : null,
        name_en: User ? User.name_en : null,
        isAuth: !!User || false,
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

export const setUserData = (id, name_ru, name_en, isAuth) => (
    {
        type: SET_USER_DATA, payload: {id, name_ru, name_en, isAuth}
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

    if (response && response.status === 201) {
        dispatch(setUserAuth(true))
    } else if (response && response.status === 401) {
        dispatch(setUserAuth(false))
    } else {
        let ErrorMessage = response && response.data.message.length > 0 ? response.data.message : "Service unavailable"
        notificationWindow('error',
            'Произошла ошибка',
            ErrorMessage,
            'bottomLeft',
            10)
    }
}

export const UserLogin = (email, password) => async (dispatch) => {
    dispatch(setFetching(true)) // Set login fetching

    let response = await AuthAPI.login(email, password)

    if (response && response.status === 200) {
        let {token, userId, name_ru, name_en} = response.data;
        dispatch(setUserData(userId, name_ru, name_en, !!token))
    } else {
        let ErrorMessage = response && response.data.message.length > 0 ? response.data.message : "Service unavailable"
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
    await AuthAPI.logout()
    dispatch(setUserData(null, null, null, false))
}

export default AuthReducer;