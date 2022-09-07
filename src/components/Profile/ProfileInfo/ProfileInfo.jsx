import css from './ProfileInfo.module.css'


const ProfileInfo = ()=>{
  return (
    <div>
      <div>
        <img src='https://www.skinali.eu/wp-content/uploads/photo-gallery/laukai_gamta/skinali-207187.jpg'  width='980px' alt=''/>
      </div>
      <div className={css.description_block}>Ava + desc</div>
    </div> 
  );
}

export default ProfileInfo;