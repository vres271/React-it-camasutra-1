import React from 'react'
import css from './Users.module.css';
import * as axios from 'axios';
import emptyUserPhoto from './../../assets/images/user.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.getUsers();
    }

    getUsers = ()=>{
        if(this.props.usersPage.users.length===0) {
            axios.get('http://localhost:8006/users')
                .then(response=>this.props.setUsers(response.data.items))
        }
    }

    render = ()=>{
        return <div className={css.users}>
            {this.props.usersPage.users.map(user=> <div className={css.user} key={user.id}>
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
                            ?<button onClick={()=>this.props.onUnfollow(user.id)}>Unfollow</button>
                            :<button onClick={()=>this.props.onFollow(user.id)}>Follow</button>}
                    </div>
                </div>
            </div>
            )}
        </div>;        
    }
}

export default Users;