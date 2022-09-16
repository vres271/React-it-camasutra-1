import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, getAuth } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
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
    setAuthUserData,
    getAuth,
})(HeaderContainer);