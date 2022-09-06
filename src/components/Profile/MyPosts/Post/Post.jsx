import css from './Post.module.css'


const Post = (props)=>{
  return (
    <div  className={css.item}>
      <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" alt="" />
      <a href='#1'>{props.name} (likes: {props.likescount})</a>
      <div className={css.message}>{props.message}</div>
    </div>
  );
}

export default Post;