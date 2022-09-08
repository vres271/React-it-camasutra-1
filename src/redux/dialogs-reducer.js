const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state,action) => {

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