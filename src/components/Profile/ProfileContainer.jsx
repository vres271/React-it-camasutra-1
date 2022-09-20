import React from 'react'
import { connect } from 'react-redux';
import {useParams} from "react-router-dom";
import Profile from './Profile';
import {  getUserProfile , getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import { compose } from 'redux';

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

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                console.log('redirect to login')
                window.location.href = '/login';
            }
        }
        if(userId) {
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }
            
    }
  
    render()  {
        return <Profile 
            {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateUserStatus={this.props.updateUserStatus}
            />
    }

}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);

// export default connect(mapStateToProps, {
//     getUserProfile,
//   })(withRouter(withAuthRedirect(ProfileContainer)))