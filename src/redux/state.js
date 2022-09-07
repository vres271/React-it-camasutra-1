import {renderEntireTree} from  './../render';
const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';

let state = {
    profilePage:{
        posts: [
            {name:'Привет как дела???', message:testMess, likescount: Math.round(100*Math.random())},
            {name:'Я уехал на дачу', message:testMess, likescount: Math.round(100*Math.random())},
            {name:'И вернулся с дачи', message:testMess, likescount: Math.round(100*Math.random())},
            {name:'Невыносимая легкость бытия', message:testMess, likescount: Math.round(100*Math.random())},
            {name:'Как дела у меня', message:testMess, likescount: Math.round(100*Math.random())},
        ],
        newPostText: 'trstdrtsdrtst 3r232',
    },
    dialogsPage:{
        dialogs: [
            {id:'1', name:'Valera'},
            {id:'2', name:'Petya'},
            {id:'3', name:'Katya'},
            {id:'4', name:'Olga'},
            {id:'5', name:'Nikita'},
            {id:'6', name:'Radeon'},
        ],  
        messages: [
            { text:'Lorem1 ipsum dolor sit amet consectetur adipisicing elit.'},
            { text:'Quae dolorum provident quaerat dolor ea id amet sed et in! '},
            { text:'Eos est sint iure facere veritatis magnam at pariatur libero hic.'},
            { text:'Provident quaerat dolor ea id amet sed et in!'},
        ],
    },
}

export let addPost = ()=>{
    let newPost = {
        id:5,
        name:'New post',
        message:state.profilePage.newPostText,
        likescount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export default state;