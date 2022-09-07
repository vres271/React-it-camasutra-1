import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';
import DialogItem from './Dialogtem/DialogItem';
import Message from './Message/DialogItem';


const Dialogs = (props)=>{


  return (
    <div >
      <h2>Duialogs</h2>
      <div className={css.dialogs}>
        <div className={css.dialogs_items}>
          {props.state.dialogs.map(item=><DialogItem id={item.id} name={item.name} key={item.id}/>)}
        </div>
        <div className={css.messages}>
          {props.state.messages.map((item,key)=><Message text={item.text} key={key}/>)}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;