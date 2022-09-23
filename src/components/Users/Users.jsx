import css from './Users.module.css';
import { Paginator } from '../common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, totalUsersCount, onSetCurrentPage, pageSize, ...props})=>{

    return <div className={css.users}>
        {props.users.map(user=><User 
            user={user} 
            followingInProggress={props.followingInProggress}
            follow={props.follow}
            unfollow={props.unfollow}
            key={user.id}
        />
        )}
        <Paginator 
            currentPage={currentPage} 
            onSetCurrentPage={onSetCurrentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
        />
    </div>;        
}

export default Users;