import * as axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));


const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'boynextdoor3000',
        // 'Authorization': 'Bearer ' + (user ? user.token : '')

    }
});

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password})
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response;
            });
    },
    logout() {
        return localStorage.removeItem("user")
    }
}


// export const UserAPI = {
//     getUsers(currentPage = 1, pageSize = 5) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data
//             });
//     },
//
//     follow(userID) {
//         return instance.post(`follow/${userID}`, {},
//         )
//     },
//
//     unfollow(userID) {
//         return instance.delete(`follow/${userID}`)
//     },
//
//     getProfile(userID) {
//         console.warn('Obsolete method. Please use ProfileAPI object')
//         return ProfileAPI.getProfile(userID)
//     }
// };