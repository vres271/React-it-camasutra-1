import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setIsFetching,setFollowingInProggress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state)=>{
  return {
    users: state.usersPage.users,    
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProggress: state.usersPage.followingInProggress,
  }
}

class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.getUsers(this.props.page,this.props.pageSize);
  }

  onSetCurrentPage = (page)=>{
      this.props.setCurrentPage(page);
      this.props.getUsers(page,this.props.pageSize);      
  }

  follow = (page)=>{
      this.props.setCurrentPage(page);
      this.props.getUsers(page,this.props.pageSize);      
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
        setFollowingInProggress={this.props.setFollowingInProggress}
        followingInProggress={this.props.followingInProggress}
      />
    </>
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFollowingInProggress,
    getUsers,
  }),
  //withAuthRedirect,
)(UsersContainer);

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setUsers,
//   setCurrentPage,
//   setTotalUsersCount,
//   setFollowingInProggress,
//   getUsers,
// })(UsersContainer)