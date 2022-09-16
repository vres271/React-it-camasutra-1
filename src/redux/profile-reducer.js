import {usersAPI,profileAPI} from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

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
                message: state.newPostText,
                likescount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            };
        case SET_USER_STATUS: 
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
}

export const addPostActionCreator = ()=>({type: ADD_POST})
export const updateTextActionCreator = (text)=>({type:UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile)=>({type:SET_USER_PROFILE, profile})
export const setUserStatus = (status)=>({type:SET_USER_STATUS, status})

export const getUserProfile = (userId)=>(dispatch)=>{
    usersAPI.getProfile(userId).then(data=>{
        dispatch(setUserProfile(data));
    })
}

export const getUserStatus = (userId)=>(dispatch)=>{
    profileAPI.getStatus(userId).then(status=>{
        dispatch(setUserStatus(status));
    })
}

export const updateUserStatus = (status)=>(dispatch)=>{
    profileAPI.updateStatus(status).then(data=>{
        if(data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    })
}

export default profileReducer;