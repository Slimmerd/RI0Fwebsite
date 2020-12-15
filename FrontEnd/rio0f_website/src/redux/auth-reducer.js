import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = '/auth/SET_USER_DATA';
const User = JSON.parse(localStorage.getItem("user"));

let initialState =
    {
        id: null,
        fullname: null,
        isAuth: !!User,
    };


// Action Creator
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,

            };
        }

        default:
            return state;
    }
};

export const setUserData = (id, fullname, isAuth) => (
    {
        type: SET_USER_DATA, payload: {id, fullname, isAuth}
    });

//Thunks
export const UserLogin = (email, password) => async (dispatch) => {
    let response = await AuthAPI.login(email, password)

    if (response.status === 200) {
        let {token, userId, fullname} = response.data;
        dispatch(setUserData(userId, fullname, (!!token)))
    } else {
        let ERRmessage = response.data.message.length > 0 ? response.data.message[0] : "Sas error"
        dispatch(stopSubmit("login", {_error: ERRmessage}))
    }
}

export const UserLogOut = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response) {
        dispatch(setUserData(null, null, false))
    }
}

export default authReducer;