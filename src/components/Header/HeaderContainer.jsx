import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import {authAPI} from './../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
            authAPI.auth().then(data=>{
                if(data.resultCode === 0) {
                    let {userId,email,login} = data.data;
                    this.props.setAuthUserData(userId,email,login);
                }
            })
  
    }

    render() {
        return <Header {...this.props}/>
    }

}
const mapStateToProps = (state)=>({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps,{
    setAuthUserData
})(HeaderContainer);