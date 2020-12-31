import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_USERS_DATA = '/users/SET_USER_DATA';
const USERS_IS_FETCHING = '/auth/USERS_IS_FETCHING';

let initialState =
    {
        users: [],
        fetching: false
    };


// Action Creator
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.payload,

            };
        }
        case USERS_IS_FETCHING: {
            return {
                ...state, fetching: action.fetching
            }
        }

        default:
            return state;
    }
};

export const setUsersData = (users) => (
    {
        type: SET_USERS_DATA, users
    });


export const setFetching = (fetching) =>
    ({
        type: USERS_IS_FETCHING, fetching
    });


//Thunks
// export const GetUsers = () => async (dispatch) => {
//     dispatch(setFetching(true)) // Set login fetching
//
//     let response = await AuthAPI.login(email, password)
//
//     if (response.status === 201) {
//         dispatch(setUsersData(response.data))
//     } else {
//         let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
//         notificationWindow('error',
//             'Произошла ошибка',
//             ErrorMessage,
//             'topRight',
//             10)
//
//         dispatch(setFetching(false)) // Disable login fetching
//         return Promise.reject(ErrorMessage)
//     }
//
//     dispatch(setFetching(false)) // Disable login fetching
// }

export default UsersReducer;