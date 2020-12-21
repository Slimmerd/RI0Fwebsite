import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import NewsReducer from "./news-reducer";
import ActNewsReducer from "./actNews-reducer";
import {reducer as formReducer} from 'redux-form'
import AuthReducer from "./auth-reducer";
import ChatReducer from "./chat-reducer";

const reducers = combineReducers({
    newsPage: NewsReducer,
    actNewsPage: ActNewsReducer,
    auth: AuthReducer,
    chat: ChatReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;