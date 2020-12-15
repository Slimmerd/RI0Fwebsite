// import {UserAPI} from "../api/api";
// import {updateObjectInArray} from "../Utils/object-helpers";

const SET_NEWS = 'SET_NEWS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TGL_IS_FETCHING = 'TGL_IS_FETCHING';
const FOLLOW_IS_FETCHING = 'FOLLOW_IS_FETCHING';


let initialState =
    {
        news: [],
        totalNewsCount: 9,
        isFetching: false,
        moreFetching: []
    };

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state, news: [...action.news]
            };
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalNewsCount: action.count}
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

export const setNews = (users) =>
    ({
        type: SET_NEWS, users
    });

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});

export const setTotalNewsCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
});

export const setIsFetching = (isFetching) => ({
    type: TGL_IS_FETCHING, isFetching
});

export const setFollowFetching = (isFetching, userID) => ({
    type: FOLLOW_IS_FETCHING, isFetching, userID
});


export const getNews = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        // let data = await NewsAPI.getNews(currentPage, pageSize);
        // dispatch(setIsFetching(false));
        // dispatch(setNews(data.items));
        // dispatch(setTotalNewsCount(data.totalCount));
    };
};


const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(setFollowFetching(true, userID));

    let response = await apiMethod(userID);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(setFollowFetching(false, userID));
}

export const follow = (userID) => {

    return async (dispatch) => {

        // followUnfollowFlow(dispatch, userID, UserAPI.follow.bind(UserAPI), followSuccess)
    };
};

export default NewsReducer;