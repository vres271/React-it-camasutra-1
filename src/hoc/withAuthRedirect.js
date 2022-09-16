import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';


export const withAuthRedirect = (Compoment)=>{

    class RedirectComponent extends React.Component {
      render() {
        if(!this.props.isAuth) return <Navigate replace  to={'/login'} />;
        return <Compoment {...this.props}/>;
      }
    }
    return connect((state)=>({isAuth: state.auth.isAuth}))(RedirectComponent);

}
  