import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props)=>{

  let newPostElement = React.createRef();

  const addPost = ()=>{
    props.addPost();
  }

  const onPostChange = ()=>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  
  return (
      <div className={css.posts}>
        <h2>My posts</h2>
        <div className="">
          New Post
          <div className=""><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} cols="80" rows="2"></textarea></div>
          <div className=""><button onClick={addPost}>Add Post</button></div>
        </div>
        <div className={css.posts_block}>
          {props.posts.map((item,key)=><Post name={item.name} message={item.message} likescount={item.likescount} key={key}/>)}
        </div>
      </div>
  );
}

export default MyPosts;