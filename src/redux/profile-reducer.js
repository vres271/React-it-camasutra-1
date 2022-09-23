import {usersAPI,profileAPI} from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const DELETE_POST = 'DELETE-POST';

const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';
let initialState = {
    posts: [
        {name:'Привет как дела???', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'Я уехал на дачу', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'И вернулся с дачи', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'Невыносимая легкость бытия', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'Как дела у меня', message:testMess, likescount: Math.round(100*Math.random())},
    ],
    newPostText: 'New post text',
    profile: null,
    status: '',
}

const profileReducer = (state=initialState,action) => {
    switch(action.type) {
        case  ADD_POST:
            let newPost = {
                id: state.posts.length+1,
                name:'New post',
                message: action.newPostText,
                likescount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            };
        case DELETE_POST: 
            return {
                ...state,
                posts: [...state.posts.filter(post=>post.id!==action.postId)],
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText)=>({type: ADD_POST, newPostText})
export const setUserProfile = (profile)=>({type:SET_USER_PROFILE, profile})
export const setUserStatus = (status)=>({type:SET_USER_STATUS, status})
export const deletePostActionCreator = (postId)=>({type: DELETE_POST, postId})

export const getUserProfile = (userId)=>async(dispatch)=>{
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId)=>async(dispatch)=>{
    let status = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(status));
}

export const updateUserStatus = (status)=>async(dispatch)=>{
    let data = await profileAPI.updateStatus(status)
    if(data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;