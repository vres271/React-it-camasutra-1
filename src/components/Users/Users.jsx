import { NavLink } from 'react-router-dom';
import emptyUserPhoto from './../../assets/images/user.png';
import css from './Users.module.css';
import * as axios from 'axios';
import {usersAPI} from './../../api/api';

const Users = (props)=>{

    let pagesCount = props.totalUsersCount/props.pageSize;
    let pages = [];
    for (let i =1; i <= pagesCount+1; i++) {
        pages.push(i);
    }
    return <div className={css.users}>
        {props.users.map(user=> <div className={css.user} key={user.id}>
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
                        ?<button disabled={props.followingInProggress.some(id=>id===user.id)} className={css.followed} onClick={()=>props.unfollow(user.id)}>Unfollow</button>
                        :<button disabled={props.followingInProggress.some(id=>id===user.id)} className={css.unfollowed} onClick={()=>props.follow(user.id)}>Follow</button>}
                </div>
            </div>
        </div>
        )}
        <div className={css.pages_select}>
            {pages.map(i=> <div 
            className={props.currentPage===i?css.selected_page:''} 
            key={i}
            onClick={()=>props.onSetCurrentPage(i)}
            >{i}</div>)}
        </div>

    </div>;        

}

export default Users;