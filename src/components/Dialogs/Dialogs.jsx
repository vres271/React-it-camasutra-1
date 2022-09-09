import css from './Dialogs.module.css';
import DialogItem from './Dialogtem/DialogItem';
import Message from './Message/DialogItem';

const Dialogs = (props)=>{

  const sendMessage = ()=>{
    props.onSendMessage();
  }

  const onNewMessageUpdate = (e)=>{
    props.onNewMessageUpdate(e.target.value);
  }

  let newMessageBody = props.dialogsPage.newMessageBody;

  return (
    <div >
      <h2>Duialogs</h2>
      <div className={css.dialogs}>
        <div className={css.dialogs_items}>
          {props.dialogsPage.dialogs.map(item=><DialogItem id={item.id} name={item.name} key={item.id}/>)}
        </div>
        <div className={css.messages}>
          <div className="">
            New Message
            <div className="">
              <textarea  value={newMessageBody} onChange={onNewMessageUpdate} cols="80" rows="2" placeholder="New message text"></textarea>
              </div>
            <div className="">
              <button onClick={sendMessage} disabled={newMessageBody===''}>Send Message</button>
              </div>
          </div>          
          {props.dialogsPage.messages.map((item,key)=><Message text={item.text} key={key}/>)}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;