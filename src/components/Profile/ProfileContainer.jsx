import React from 'react'
import { connect } from 'react-redux';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.userId||25899}`,{
            withCredentials: true,
            headers: {
                'API-KEY':'29838159-a78c-45fd-ae74-ff93a3ab0840'
            }
        })
            .then(response=>{
                this.props.setUserProfile(response.data)
            })
    }
  
    render()  {
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
})
  
export default connect(mapStateToProps, {
    setUserProfile,
  })(withRouter(ProfileContainer))