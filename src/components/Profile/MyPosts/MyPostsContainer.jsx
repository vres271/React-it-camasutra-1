import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state)=>{
  return {
    profilePage:state.profilePage
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onPostAdd: (newPostText)=>{
      dispatch(addPostActionCreator(newPostText));
    },
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;