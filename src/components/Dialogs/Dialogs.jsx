import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';
import DialogItem from './Dialogtem/DialogItem';
import Message from './Message/DialogItem';


const Dialogs = ()=>{

  let dialogsItems = [
    {id:'1', name:'Valera'},
    {id:'2', name:'Petya'},
    {id:'3', name:'Katya'},
    {id:'4', name:'Olga'},
    {id:'5', name:'Nikita'},
    {id:'6', name:'Radeon'},
  ];  
  
  let messagesItems = [
    { text:'Lorem1 ipsum dolor sit amet consectetur adipisicing elit.'},
    { text:'Quae dolorum provident quaerat dolor ea id amet sed et in! '},
    { text:'Eos est sint iure facere veritatis magnam at pariatur libero hic.'},
    { text:'Provident quaerat dolor ea id amet sed et in!'},

  ];


  return (
    <div >
      <h2>Duialogs</h2>
      <div className={css.dialogs}>
        <div className={css.dialogs_items}>
          {dialogsItems.map(item=><DialogItem id={item.id} name={item.name} key={item.id}/>)}
        </div>
        <div className={css.messages}>
          {messagesItems.map((item,key)=><Message text={item.text} key={key}/>)}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;