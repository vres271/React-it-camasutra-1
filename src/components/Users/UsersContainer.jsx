import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';


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
    setCurrentPage: (page)=>{
      dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (count)=>{
      dispatch(setTotalUsersCountAC(count))
    },
  }
}

class UsersContainer extends React.Component {

  componentDidMount() {
      axios.get(`http://localhost:8006/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
          .then(response=>{
              this.props.setUsers(response.data.items)
              this.props.setTotalUsersCount(response.data.count)
          })
  }

  onSetCurrentPage = (page)=>{
      this.props.setCurrentPage(page);
      axios.get(`http://localhost:8006/users?page=${page}&count=${this.props.usersPage.pageSize}`)
          .then(response=>this.props.setUsers(response.data.items))
  }

  render = ()=><Users
      usersPage={this.props.usersPage}
      onSetCurrentPage={this.onSetCurrentPage}
      onUnfollow={this.props.onUnfollow}
      onFollow={this.props.onFollow}
  />
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)