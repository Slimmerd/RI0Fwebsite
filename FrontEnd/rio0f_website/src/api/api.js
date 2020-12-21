import * as axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));


const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'boynextdoor3000',
        'Authorization': 'Bearer ' + (user ? user.token : '')

    }
});

export const AuthAPI = {
    getNames(id) {
        return instance.post(`auth/name`, {id})
            .then((response) => {
                return response.data
            }).catch((error) => {
                return error.response
            })
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


export const NewsAPI = {
    getNews() {
        return instance.get(`news/`)
            .then(response => {
                return response
            });
    },

    getParticularNews(url) {
        return instance.get(`news/` + url)
            .then(response => {
                return response.data
            }).catch((error) => {
                return error.response
            })
    },

    postNews(name_ru, name_en, text_ru, text_en, img) {
        return instance.post(`news/create`, {name_ru, name_en, text_ru, text_en, img})
            .catch((error) => {
                return error.response
            })

    },

    deleteNews(userID) {
        return instance.delete(`follow/${userID}`)
    },
};


export const ChatAPI = {
    getComments() {
        return instance.get('chat/')
            .then(response => {
                return response
            })
    },

    postComment(name, call, email, text) {
        return instance.post('chat/post', {name, call, email, text})
            .then(response => {
                return response
            })
    }
}