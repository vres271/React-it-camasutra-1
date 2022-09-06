import css from './Header.module.css';

const Header = ()=>{
  return (
    <header className='header'>
      <img  className={css.img} src='https://cdn.dribbble.com/users/3527252/screenshots/6614198/color-1.jpg' alt=''/>
    </header>
  );
}

export default Header;