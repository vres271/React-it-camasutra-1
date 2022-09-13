import emptyUserPhoto from './../../assets/images/user.png';
import css from './Users.module.css';

const Users = (props)=>{

    let pagesCount = props.usersPage.totalUsersCount/props.usersPage.pageSize;
    let pages = [];
    for (let i =1; i <= pagesCount+1; i++) {
        pages.push(i);
    }
    return <div className={css.users}>
        <div className={css.pages_select}>
            {pages.map(i=> <div 
            className={props.usersPage.currentPage===i?css.selected_page:''} 
            key={i}
            onClick={()=>props.onSetCurrentPage(i)}
            >{i}</div>)}
        </div>
        {props.usersPage.users.map(user=> <div className={css.user} key={user.id}>
            <div  className={css.user_sidebar}>
                <div>
                    <img src={user.photoUrl||emptyUserPhoto} alt="" />
                </div>
            </div>
            <div  className={css.user_content}>
                <div>
                    <div className={css.user_fullname}>{user.fullName}</div>
                    <div className={css.user_status}>{user.status}</div>
                </div>
                <div  className={css.user_location}>
                    <div>{user.location.country},</div>
                    <div>{user.location.city}</div>
                </div>
            </div>
            <div  className={css.user_sidebar_right}>
                <div>
                    {user.followed
                        ?<button onClick={()=>props.onUnfollow(user.id)}>Unfollow</button>
                        :<button onClick={()=>props.onFollow(user.id)}>Follow</button>}
                </div>
            </div>
        </div>
        )}
    </div>;        

}

export default Users;