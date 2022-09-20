import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props)=>{
  const logOut = ()=>{
    props.logout();
  }
  return (
    <header className='header'>
      <img  className={css.img} src='https://brandon-chun.github.io/images/1024.png' alt=''/>
      <div className={css.login_block}>
        {props.isAuth?<div>{props.login} | <button onClick={logOut}>Log out</button></div>:<NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;