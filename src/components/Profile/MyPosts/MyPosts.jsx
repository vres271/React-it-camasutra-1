import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';
import {reduxForm,Field} from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


const MyPosts = React.memo(props=>{
  
  const addNewPost = (values)=>{
    props.onPostAdd(values.newPostText);
  }
 
  return (
      <div className={css.posts}>
        <h2>My posts</h2>
        <div className="">
          New Post
          <AddPostFormRedux onSubmit={addNewPost}/>
        </div>
        <div className={css.posts_block}>
          {props.profilePage.posts.sort((a,b)=>1*a.id<1*b.id?1:-1).map((item,key)=><Post name={item.name} message={item.message} likescount={item.likescount} key={key}/>)}
        </div>
      </div>
  )
})

const maxLength10 = maxLengthCreator(10);

const AddPostForm =(props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" validate={[required,maxLength10]} component={Textarea}  placeholder="Message text"/>
      <button>Add Post</button>
    </form>
  );

}
const AddPostFormRedux = reduxForm({form:'dialogAddPostForm'})(AddPostForm)

export default MyPosts;