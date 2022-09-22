import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setIsFetching,setFollowingInProggress,requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProggress, getUsers } from '../../redux/users-selectors';

const mapStateToProps = (state)=>{
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProggress: getFollowingInProggress(state),
  }
}

class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.requestUsers(this.props.page,this.props.pageSize);
  }

  onSetCurrentPage = (page)=>{
      this.props.requestUsers(page,this.props.pageSize);      
  }

  follow = (page)=>{
      this.props.requestUsers(page,this.props.pageSize);      
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
    requestUsers,
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