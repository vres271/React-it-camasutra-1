// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

class App extends React.Component  {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) return <Preloader/>
    
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar />
        <div  className='app-wrapper-content' >
          <Routes>
            <Route path='/login' element={<Login />}></Route>
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
    )
  }
};

const withRouter = WrappedComponent => props => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks
  return (
      <WrappedComponent
          {...props}
          params={params}
          // etc...
      />
  );
};


const AppContainer = compose(
  withRouter,
  connect( state=>({initialized: state.app.initialized}) , {initializeApp}),
)(App);

const SamuraiJSApp = (props)=>{
  return (
    <BrowserRouter id="br">
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;