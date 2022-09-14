import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:8006/users/${2}`)
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
  })(ProfileContainer)