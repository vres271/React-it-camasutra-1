const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id:1, followed: true, fullName:'Nikita', photoUrl: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg', status:'Hello everyone yeah. Канифоль. Серебро дороже золота',location:{city:'Saratov',country:'Russia'}},
        {id:2, followed: false, fullName:'Jhon',photoUrl: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg',status:'must type my status here. Этиленгликоль. Кто успел – тот и съел',location:{city:'Kiev',country:'Ukrain'}},
        {id:3, followed: true, fullName:'Tom Soyer',photoUrl: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg',status:'USA guy here, yo! Калоши и валенки. Достаточно одной “Секунды”!',location:{city:'New York',country:'USA'}},
    ],

}

const usersReducer = (state=initialState,action) => {
    switch(action.type) {
        case FOLLOW:
            return  {
                ...state, 
                users: state.users.map(user=>{
                    if(user.id===action.userId) return {...user,followed:true};
                    return user;
                }),
            };
        case UNFOLLOW:
            return  {
                ...state, 
                users: state.users.map(user=>{
                    if(user.id===action.userId) return {...user,followed:false};
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users,...action.users],
            }
        default:
            return state;
    }
}

export const followAC = (userId)=>({type: FOLLOW, userId})
export const unfollowAC = (userId)=>({type: UNFOLLOW, userId})
export const setUsersAC = (users)=>({type: SET_USERS, users})

export default usersReducer;