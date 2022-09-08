import css from './Dialogs.module.css';
import DialogItem from './Dialogtem/DialogItem';
import Message from './Message/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props)=>{

  const state = props.store.getState();

  const sendMessage = ()=>{
    props.store.dispatch(sendMessageCreator());
  }

  const onSendMessageClick = (e)=>{
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  let newMessageBody = state.dialogsPage.newMessageBody;

  return (
    <div >
      <h2>Duialogs</h2>
      <div className={css.dialogs}>
        <div className={css.dialogs_items}>
          {state.dialogsPage.dialogs.map(item=><DialogItem id={item.id} name={item.name} key={item.id}/>)}
        </div>
        <div className={css.messages}>
          <div className="">
            New Message
            <div className="">
              <textarea  value={newMessageBody} onChange={onSendMessageClick} cols="80" rows="2" placeholder="New message text"></textarea>
              </div>
            <div className="">
              <button onClick={sendMessage} disabled={newMessageBody===''}>Send Message</button>
              </div>
          </div>          
          {state.dialogsPage.messages.map((item,key)=><Message text={item.text} key={key}/>)}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;