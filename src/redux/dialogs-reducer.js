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
        case SEND_MESSAGE:
            const newMessage  = {
                id: state.messages.length+1,
                text: action.newMessageBody,
            } 
            return {
                ...state,
                messages: [...state.messages,newMessage],
                newMessageBody: '',
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;