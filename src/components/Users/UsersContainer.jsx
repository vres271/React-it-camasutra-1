import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';

const mapStateToProps = (state)=>{
  return {
    usersPage: state.usersPage,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onFollow: (userId)=>{
      dispatch(followAC(userId));
    },
    onUnfollow: (userId)=>{
      dispatch(unfollowAC(userId))
    },
    setUsers: (users)=>{
      dispatch(setUsersAC(users))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;