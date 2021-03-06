import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import NewsReducer from "./news-reducer";
import ActNewsReducer from "./actNews-reducer";
import {reducer as formReducer} from 'redux-form'
import AuthReducer from "./auth-reducer";
import ChatReducer from "./chat-reducer";
import PhotoReducer from "./photo-reducer";
import GalleryReducer from "./gallery-reducer";
import SponsorsReducer from "./sponsors-reducer";

const reducers = combineReducers({
    newsPage: NewsReducer,
    actNewsPage: ActNewsReducer,
    photos: PhotoReducer,
    gallery: GalleryReducer,
    auth: AuthReducer,
    chat: ChatReducer,
    sponsors: SponsorsReducer,
    form: formReducer
});

const composeEnhancers =
    process.env.ENV === 'dev' ? (typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
        compose) : compose


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;