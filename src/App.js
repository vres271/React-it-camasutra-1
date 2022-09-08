// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';

const App = (props)=> {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Sidebar/> */}
        <div  className='app-wrapper-content' >
          <Routes>
            <Route path='/dialogs' element={<Dialogs 
              store={props.store}
              />}></Route>
            <Route path='/dialogs/*' element={<Dialogs 
              store={props.store} 
              />}></Route>
            <Route path='/profile' element={<Profile 
                dispatch={props.dispatch}
                state={props.state.profilePage}
              />}
            ></Route>
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

