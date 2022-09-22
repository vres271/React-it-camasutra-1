import {usersAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET-FOLLOWING-IN-PROGRESS';


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProggress: [],
}

const usersReducer = (state=initialState,action) => {
    switch(action.type) {
        case FOLLOW:
            return  {
                ...state, 
                users: state.users.map(user=>{
                    if(user.id===action.userId) return {...user,followed:true};
                    return user;
                }),
            };
        case UNFOLLOW:
            return  {
                ...state, 
                users: state.users.map(user=>{
                    if(user.id===action.userId) return {...user,followed:false};
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProggress: action.isFetching?[...state.followingInProggress, action.userId]:state.followingInProggress.filter(id=>action.userId!==id),
            }
        default:
            return state;
    }
}

export const followSuccess = (userId)=>({type: FOLLOW, userId})
export const unfollowSuccess = (userId)=>({type: UNFOLLOW, userId})
export const setUsers = (users)=>({type: SET_USERS, users})
export const setCurrentPage = (page)=>({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (count)=>({type: SET_TOTAL_USERS_COUNT, count})
export const setIsFetching = (isFetching)=>({type: SET_IS_FETCHING, isFetching})
export const setFollowingInProggress = (userId, isFetching)=>({type: SET_FOLLOWING_IN_PROGRESS, userId, isFetching})

export const requestUsers = (page,pageSize)=>(dispatch)=>{
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));
    usersAPI.getUsers(page,pageSize).then(data=>{
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setIsFetching(false));
    })
}

export const follow = (userId)=>(dispatch)=>{
    dispatch(setFollowingInProggress(userId,true));
    usersAPI.follow(userId).then(data=>{
        if(data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(setFollowingInProggress(userId,false));
    })
}

export const unfollow = (userId)=>(dispatch)=>{
    dispatch(setFollowingInProggress(userId,true));
    usersAPI.unfollow(userId).then(data=>{
        if(data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(setFollowingInProggress(userId,false));
    })
}

export default usersReducer;