import {ChatAPI, PhotoAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_PHOTO = 'SET_PHOTO';
const ADD_PHOTO = 'ADD_PHOTO';
const PHOTO_IS_FETCHING = 'PHOTO_IS_FETCHING';

let initialState =
    {
        photos: [],
        fetching: false
    };

const PhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTO: {
            return {
                ...state, photos: [...action.photos]
            };
        }
        case ADD_PHOTO: {
            return {
                ...state, photos: [action.photo, ...state.photos]
            };
        }
        case PHOTO_IS_FETCHING: {
            return {...state, fetching: action.fetching}
        }

        default:
            return state;
    }
};

export const setPhotos = (photos) =>
    ({
        type: SET_PHOTO, photos
    });

export const addPhoto = (photo) =>
    ({
        type: ADD_PHOTO, photo
    });

export const setFetching = (fetching) =>
    ({
        type: PHOTO_IS_FETCHING, fetching
    });


//Thunks
export const getPhotos = () => async (dispatch) => {
    let data = await ChatAPI.getComments()

    dispatch(setPhotos(data.data))
}

export const uploadPhoto = (files) => async (dispatch) => {
    dispatch(setFetching(true)) // Set comment fetching

    let data = await PhotoAPI.uploadPhoto(files)

    if (data.status === 201) {
        dispatch(addPhoto(files))
        notificationWindow('success',
            'Фотографии успешно загружены',
            'Ваши фото были успешно загружены, получить ссылки на дннаые файлы вы сможете в разделе фото',
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = data.data.message.length > 0 ? data.data.message : "Undefined error"
        dispatch(stopSubmit("UploadForm", {_error: ErrorMessage}))
        notificationWindow('error',
            'Произошла ошибка во время загрузки',
            ErrorMessage,
            'bottomLeft',
            10)
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false)) // Disable comment fetching
}


export default PhotoReducer;