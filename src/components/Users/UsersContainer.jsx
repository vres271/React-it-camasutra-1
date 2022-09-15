import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from './../../api/api';

const mapStateToProps = (state)=>{
  return {
    users: state.usersPage.users,    
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.setIsFetching(true);
      usersAPI.getUsers(this.props.page,this.props.pageSize).then(data=>{
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
          this.props.setIsFetching(false);
      })
  }

  onSetCurrentPage = (page)=>{
      this.props.setCurrentPage(page);
      this.props.setIsFetching(true);
      usersAPI.getUsers(page,this.props.pageSize).then(data=>{
          this.props.setUsers(data.items)
          this.props.setIsFetching(false);
        })
  }

  render = ()=><>
      {this.props.isFetching?<Preloader/>:null}
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}        
        isFetching={this.props.isFetching}        
        onSetCurrentPage={this.onSetCurrentPage}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    </>
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
})(UsersContainer)