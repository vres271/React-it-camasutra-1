// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props)=> {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar />
        {/* <Sidebar/> */}
        <div  className='app-wrapper-content' >
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />}></Route>
            <Route path='/dialogs/*' element={<DialogsContainer />}></Route>
            <Route path='/' element={<ProfileContainer />}></Route>
            <Route path='/profile' element={<ProfileContainer />}></Route>
            <Route path='/profile/:userId' element={<ProfileContainer />}></Route>
            <Route path='/users' element={<UsersContainer  />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/music' element={<Music />}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;

