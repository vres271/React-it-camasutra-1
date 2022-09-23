import { NavLink } from 'react-router-dom';
import emptyUserPhoto from './../../assets/images/user.png';
import css from './Users.module.css';

const User = ({user, followingInProggress, follow, unfollow})=>{

    return <div className={css.user} >
            <div  className={css.user_sidebar}>
                <div>
                    <NavLink to={'/profile/'+user.id}><img src={user.photos.small||emptyUserPhoto} alt="" /></NavLink>
                </div>
            </div>
            <div  className={css.user_content}>
                <div>
                    <div className={css.user_fullname}>{user.name}</div>
                    <div className={css.user_status}>{user.status}</div>
                </div>
                {/* <div  className={css.user_location}>
                    <div>{user.location.country},</div>
                    <div>{user.location.city}</div>
                </div> */}
            </div>
            <div  className={css.user_sidebar_right}>
                <div>
                    {user.followed
                        ?<button disabled={followingInProggress.some(id=>id===user.id)} className={css.followed} onClick={()=>unfollow(user.id)}>Unfollow</button>
                        :<button disabled={followingInProggress.some(id=>id===user.id)} className={css.unfollowed} onClick={()=>follow(user.id)}>Follow</button>}
                </div>
            </div>
        </div>;        
}

export default User;