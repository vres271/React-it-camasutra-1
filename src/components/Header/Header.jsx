import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props)=>{
  return (
    <header className='header'>
      <img  className={css.img} src='https://brandon-chun.github.io/images/1024.png' alt=''/>
      <div className={css.login_block}>
        {props.isAuth?props.login:<NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;