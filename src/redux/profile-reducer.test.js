import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";

const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';
let state = {
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

it('Length of posts should be incremented', ()=>{
    let action = addPostActionCreator('Test post text')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(6);
})

it('Post text should be correct', ()=>{
    let action = addPostActionCreator('Test post text')
    let newState = profileReducer(state,action);
    expect(newState.posts[5].message).toBe('Test post text');
})

it('After deleting posts length decrements', ()=>{
    let action = deletePostActionCreator(1)
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
})

it('After deleting posts length not decrements when id not exists', ()=>{
    let action = deletePostActionCreator(18)
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
})