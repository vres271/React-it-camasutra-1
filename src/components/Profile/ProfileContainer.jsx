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
        axios.get(`http://localhost:8006/users/${this.props.params.userId||1}`)
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