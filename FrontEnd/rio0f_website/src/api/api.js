import * as axios from "axios";

const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.token : null
}

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'boynextdoor3000',
        'Authorization': 'Bearer ' + getToken() || null

    }
});

export const AuthAPI = {
    // Get auth status
    me() {
        return instance.get('auth/me')
            .then((response) => {
                return response
            }).catch((error) => {
                localStorage.removeItem("user")
                return error.response

            })
    },

    // Get names (RU/EN) from DB
    getNames(id) {
        return instance.post(`auth/name`, {id})
            .then((response) => {
                return response.data
            }).catch((error) => {
                return error.response
            })
    },

    // Login
    login(email, password) {
        return instance.post(`auth/login`, {email, password})
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    instance.defaults.headers.Authorization = `Bearer ${response.data.token}`; //Updates token
                }
                return response;
            }).catch((error) => {
                return error.response
            })
    },

    // Logout
    logout() {
        return localStorage.removeItem("user")
    }
}


export const NewsAPI = {
    // Get news list
    getNews() {
        return instance.get(`news/`)
            .then(response => {
                return response
            });
    },

    // Get particular news by url
    getParticularNews(url) {
        return instance.get(`news/` + url)
            .then(response => {
                return response.data
            }).catch((error) => {
                return error.response
            })
    },

    // Post news
    postNews(name_ru, name_en, text_ru, text_en, img) {
        return instance.post(`news/create`, {name_ru, name_en, text_ru, text_en, img})
            .catch((error) => {
                return error.response
            })

    },

    // Delete news by url
    //TODO: Delete news API
    deleteNews(userID) {
        return instance.delete(`follow/${userID}`)
    },
};


export const ChatAPI = {
    // Get list of comments
    getComments() {
        return instance.get('chat/')
            .then(response => {
                return response
            })
    },

    // Post comment
    postComment(name, call, email, text) {
        return instance.post('chat/post', {name, call, email, text})
            .then(response => {
                return response
            })
    }

//    TODO: Delete comment
}


export const PhotoAPI = {
    //    Upload photo
    uploadPhoto(photoFile) {
        const formData = new FormData();
        photoFile.fileList.forEach(file => {
            formData.append("img", file.originFileObj)
        })

        return instance.post('/photos/upload', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    }
//    TODO: Delete photo
//    TODO: Make a photo post?
}