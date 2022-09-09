import { connect } from 'react-redux';
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state)=>{
  return {
    profilePage:state.profilePage
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    updateNewPostText: (text)=>{
      dispatch(updateTextActionCreator(text))
    },
    onPostAdd: ()=>{
      dispatch(addPostActionCreator());
    },
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;