import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = ()=>{
  return (
    <div >
      <ProfileInfo/>
      <MyPosts />
    </div>
  );
}

export default Profile;