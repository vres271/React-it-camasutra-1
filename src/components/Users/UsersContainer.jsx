import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

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
    setIsFetching: (isFetching)=>{
      dispatch(setIsFetchingAC(isFetching))
    },
  }
}

class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.setIsFetching(true);
      axios.get(`http://localhost:8006/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
          .then(response=>{
              this.props.setUsers(response.data.items)
              this.props.setTotalUsersCount(response.data.count)
              this.props.setIsFetching(false);
          })
  }

  onSetCurrentPage = (page)=>{
      this.props.setCurrentPage(page);
      this.props.setIsFetching(true);
      axios.get(`http://localhost:8006/users?page=${page}&count=${this.props.usersPage.pageSize}`)
          .then(response=>{
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false);
          })
  }

  render = ()=><>
      {this.props.usersPage.isFetching?<Preloader/>:null}
      <Users
        usersPage={this.props.usersPage}
        onSetCurrentPage={this.onSetCurrentPage}
        onUnfollow={this.props.onUnfollow}
        onFollow={this.props.onFollow}
      />
    </>
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)