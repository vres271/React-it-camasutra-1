const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

export const dialogsReducer = (state=initialState,action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const newMessage  = {
                id: state.messages.length+1,
                text: state.newMessageBody
            } 
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = ()=>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text)=>({type:UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer;