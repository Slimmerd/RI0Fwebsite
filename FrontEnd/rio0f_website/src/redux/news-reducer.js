import {UserAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_NEWS = 'SET_NEWS';
const SET_CURNT_PAGE = 'SET_CURNT_PAGE';
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
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            };
        }

        case SET_NEWS: {
            return {
                ...state, users: [...action.users]
            };
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
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


export const followSuccess = (userID) => (
    {
        type: FOLLOW, userID
    });

export const unfollowSuccess = (userID) =>
    ({
        type: UNFOLLOW, userID
    });

export const setNews = (users) =>
    ({
        type: SET_NEWS, users
    });

export const setCurrentPage = (currentPage) => ({
    type: SET_CURNT_PAGE, currentPage
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


export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await UserAPI.getUsers(currentPage, pageSize);
        dispatch(setIsFetching(false));
        dispatch(setNews(data.items));
        dispatch(setTotalNewsCount(data.totalCount));
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

        followUnfollowFlow(dispatch, userID, UserAPI.follow.bind(UserAPI), followSuccess)
    };
};

export const unfollow = (userID) => {

    return async (dispatch) => {

        followUnfollowFlow(dispatch, userID, UserAPI.unfollow.bind(UserAPI), unfollowSuccess)

    };
};


export default NewsReducer;