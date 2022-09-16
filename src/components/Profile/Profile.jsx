import MyPostsContainer from './MyPosts/MyPostsContainer';
//import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props)=>{
  return (
    <div >
      <ProfileInfo profile={props.profile}  status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;