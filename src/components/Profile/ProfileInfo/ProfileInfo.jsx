import css from './ProfileInfo.module.css'


const ProfileInfo = ()=>{
  return (
    <div>
      <div>
        <img src='https://fbcd.co/images/products/097d7fe82802f8490d39ba35ad269639_resize.jpg' alt=''/>
      </div>
      <div className={css.description_block}>Ava + desc</div>
    </div> 
  );
}

export default ProfileInfo;