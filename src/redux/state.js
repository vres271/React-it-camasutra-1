import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';

let store = {
    _state: {
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
                {id:'1', text:'Lorem1 ipsum dolor sit amet consectetur adipisicing elit.'},
                {id:'2', text:'Quae dolorum provident quaerat dolor ea id amet sed et in! '},
                {id:'3', text:'Eos est sint iure facere veritatis magnam at pariatur libero hic.'},
                {id:'4', text:'Provident quaerat dolor ea id amet sed et in!'},
            ],
            newMessageBody: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {console.log('state changhed')},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    },


}



export default store;