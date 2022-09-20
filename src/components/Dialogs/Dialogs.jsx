import {Navigate} from 'react-router-dom';
import css from './Dialogs.module.css';
import DialogItem from './Dialogtem/DialogItem';
import Message from './Message/DialogItem';
import {reduxForm,Field} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';


const Dialogs = (props)=>{

  const addNewMessage = (values)=>{
    props.onSendMessage(values.newMessageBody);
  }
  
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
          </div>          
          {props.dialogsPage.messages.map((item,key)=><Message text={item.text} key={key}/>)}
        </div>
      </div>
    </div>
  );
}

const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props)=>{

  return  <form onSubmit={props.handleSubmit}>
        <Field name="newMessageBody" validate={[required,maxLength10]} component={Textarea}  placeholder="Message text"/>
        <button>Send Message</button>
    </form>

}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;