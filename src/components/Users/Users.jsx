import css from './Users.module.css'

const Users = (props)=>{

    if(props.usersPage.users.length===0) props.setUsers([
        {id:1, followed: true, fullName:'Nikita1', photoUrl: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg', status:'Hello everyone yeah',location:{city:'Saratov',country:'Russia'}},
        {id:2, followed: false, fullName:'Jhon',photoUrl: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg',status:'must type my status here',location:{city:'Kiev',country:'Ukrain'}},
        {id:3, followed: true, fullName:'Tom',photoUrl: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg',status:'USA guy here, yo!',location:{city:'New York',country:'USA'}},
    ]); 

    return <div className={css.users}>
        {props.usersPage.users.map(user=> <div className={css.user} key={user.id}>
            <div  className={css.user_sidebar}>
                <div>
                    <img src={user.photoUrl} alt="" />
                </div>
                <div>
                    {user.followed
                        ?<button onClick={()=>props.onUnfollow(user.id)}>Unfollow</button>
                        :<button onClick={()=>props.onFollow(user.id)}>Follow</button>}
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
        </div>
        )}
    </div>;
}

export default Users;