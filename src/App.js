import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
            <Route path='/dialogs' element={<Suspense fallback={<Preloader/>}><DialogsContainer /></Suspense>}></Route>
            <Route path='/dialogs/*' element={<Suspense fallback={<Preloader/>}><DialogsContainer /></Suspense>}></Route>
            <Route path='/' element={<Suspense fallback={<Preloader/>}><ProfileContainer /></Suspense>}></Route>
            <Route path='/profile' element={<Suspense fallback={<Preloader/>}><ProfileContainer /></Suspense>}></Route>
            <Route path='/profile/:userId' element={<Suspense fallback={<Preloader/>}><ProfileContainer /></Suspense>}></Route>
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
    <BrowserRouter id="br" basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;