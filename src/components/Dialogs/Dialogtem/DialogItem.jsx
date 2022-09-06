import { NavLink } from 'react-router-dom';
import css from './../Dialogs.module.css';

const DialogItem = (props)=>{
  return (
    <div className={css.dialog}>
      <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;