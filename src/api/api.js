import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY':'29838159-a78c-45fd-ae74-ff93a3ab0840'
    },
})

export const usersAPI = {
    getUsers: (page,pageSize)=>{
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response=>response.data)
    },
    follow: (userId)=>{
        return instance.post(`follow/${userId}`)
            .then(response=>response.data)
    },
    unfollow: (userId)=>{
        return instance.delete(`follow/${userId}`)
            .then(response=>response.data)
    },

}

export const authAPI = {
    auth: ()=>{
        return instance.get(`auth/me`)
            .then(response=>response.data)
}

}