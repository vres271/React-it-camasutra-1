import css from './Header.module.css';

const Header = ()=>{
  return (
    <header className='header'>
      <img  className={css.img} src='https://brandon-chun.github.io/images/1024.png' alt=''/>
    </header>
  );
}

export default Header;