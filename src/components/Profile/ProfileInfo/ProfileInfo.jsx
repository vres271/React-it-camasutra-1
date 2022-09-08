import css from './ProfileInfo.module.css'


const ProfileInfo = ()=>{
  return (
    <div>
      <div>
        <img src='https://mooka.ie/img/sliderimages/slider-adult-desk-background.jpg'  width='980px' alt=''/>
      </div>
      <div className={css.description_block}>Ava + desc</div>
    </div> 
  );
}

export default ProfileInfo;