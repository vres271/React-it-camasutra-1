const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';
let initialState = {
    posts: [
        {name:'Привет как дела???', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'Я уехал на дачу', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'И вернулся с дачи', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'Невыносимая легкость бытия', message:testMess, likescount: Math.round(100*Math.random())},
        {name:'Как дела у меня', message:testMess, likescount: Math.round(100*Math.random())},
    ],
    newPostText: 'trstdrtsdrtst 3r232',
}

const profileReducer = (state=initialState,action) => {
    switch(action.type) {
        case  ADD_POST:
            let newPost = {
                id:5,
                name:'New post',
                message: state.newPostText,
                likescount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = ()=>({type: ADD_POST})
export const updateTextActionCreator = (text)=>({type:UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;