import Preloader from '../../common/Preloader/Preloader';
import css from './ProfileInfo.module.css'
import emptyUserPhoto from './../../../assets/images/user.png';


const ProfileInfo = (props)=>{

  if(!props.profile) return <Preloader/>;

  return (
    <div>
      <div>
        <img src='https://mooka.ie/img/sliderimages/slider-adult-desk-background.jpg'  width='980px' alt=''/>
      </div>
      <div className={css.description_block}>
        <div className={css.left_block}>
          <img src={props.profile.photos.large||emptyUserPhoto} alt="" />
        </div>
        <div className={css.right_block}>
          <h1>{props.profile.fullName}</h1>
          <small>{props.profile.status}</small>
          <br/>
          <br/>
          <div>
            <h3>Location</h3>
            <div>{props.profile.location.country}, {props.profile.location.city}</div>
          </div>
          <div>
            <h3>Contacts</h3>
            <div><b>github</b>: <a href="{props.profile.contacts.github}">{props.profile.contacts.github}</a></div>
            <div><b>youtube</b>: <a href="{props.profile.contacts.youtube}">{props.profile.contacts.youtube}</a></div>
          </div>
        </div> 
      </div>
    </div> 
  );
}

export default ProfileInfo;