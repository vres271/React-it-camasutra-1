import React from 'react'
import { connect } from 'react-redux';
import {useParams} from "react-router-dom";
import Profile from './Profile';
import {  getUserProfile , getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
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
        this.props.getUserProfile(this.props.params.userId||25899);
        this.props.getUserStatus(this.props.params.userId||25899);
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
})

export default compose(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);

// export default connect(mapStateToProps, {
//     getUserProfile,
//   })(withRouter(withAuthRedirect(ProfileContainer)))