import {PhotoAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {notificationWindow} from "../utils/notificationWindow";

const SET_PHOTO = 'SET_PHOTO';
const DELETE_PHOTO = 'DELETE_PHOTO';
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
        case DELETE_PHOTO: {
            return {
                ...state, photos: [...state.photos.filter(photo => photo._id !== action.photo)]
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

export const setDeletedPhoto = (photo) => ({
    type: DELETE_PHOTO, photo
});

export const setFetching = (fetching) =>
    ({
        type: PHOTO_IS_FETCHING, fetching
    });


//Thunks
export const getPhotos = () => async (dispatch) => {
    let response = await PhotoAPI.getPhotos()
    dispatch(setPhotos(response.data))
}

export const uploadPhoto = (files) => async (dispatch) => {
    dispatch(setFetching(true)) // Set comment fetching

    let response = await PhotoAPI.uploadPhoto(files)

    if (response.status === 201) {
        dispatch(getPhotos())
        notificationWindow('success',
            'Фотографии успешно загружены',
            'Ваши фото были успешно загружены, получить ссылки на дннаые файлы вы сможете в разделе фото',
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
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

export const deletePhoto = (id) => async (dispatch) => {
    dispatch(setFetching(true))

    let response = await PhotoAPI.deletePhoto(id)

    if (response.status === 201) {

        dispatch(setDeletedPhoto(response.data.id))
        notificationWindow('success',
            'Фото успешно удалено',
            `Фото был успешно удалено`,
            'bottomLeft',
            10)
    } else {
        let ErrorMessage = response.data.message.length > 0 ? response.data.message : "Undefined error"
        notificationWindow('error',
            'Произошла ошибка во время удаления фото',
            ErrorMessage,
            'bottomLeft',
            10)
        dispatch(setFetching(false))
        return Promise.reject(ErrorMessage)
    }
    dispatch(setFetching(false))

}

export default PhotoReducer;