import * as axios from "axios";
import Cookies from "js-cookie";

const getToken = () => {
    const cookie = Cookies.get('user')

    if (cookie) {
        const user = JSON.parse(cookie)
        return user ? user.token : null
    }

}

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ADDRESS,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.REACT_APP_APIKEY,
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
                Cookies.remove("user")
                return error.response

            })
    },

    // Get names (RU/EN) from DB
    getNames(id) {
        return instance.get(`auth/name/${id}`)
            .then((response) => {
                return response
            }).catch((error) => {
                return error.response
            })
    },

    // Login
    login(email, password) {
        return instance.post(`auth/login`, {email, password})
            .then((response) => {
                if (response.data.token) {
                    Cookies.set("user", JSON.stringify(response.data));
                    instance.defaults.headers.Authorization = `Bearer ${response.data.token}`; //Updates token
                }
                return response;
            }).catch((error) => {
                return error.response
            })
    },

    // Logout
    logout() {
        return Cookies.remove("user")
    }
}


export const NewsAPI = {
    // Get news list
    getNews() {
        return instance.get(`news/`)
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            });
    },

    // Get particular news by url
    getParticularNews(url) {
        return instance.get(`news/` + url)
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })
    },

    // Post news
    postNews(name_ru, name_en, text_ru, text_en, img) {
        return instance.post(`news/create`, {name_ru, name_en, text_ru, text_en, img})
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })

    },

    // Delete news by url
    deleteNews(url) {
        return instance.delete(`news/delete/${url}`).then(response => {
            return response
        }).catch((error) => {
            return error.response
        })
    },

    // Edit news by url
    editNews(name_ru, name_en, text_ru, text_en, img, url) {
        return instance.post(`news/edit/${url}`, {name_ru, name_en, text_ru, text_en, img}).then(response => {
            return response
        }).catch((error) => {
            return error.response
        })
    }

};


export const ChatAPI = {
    // Get list of comments
    getComments() {
        return instance.get('chat/')
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })
    },

    // Post comment
    postComment(name, call, email, text) {
        return instance.post('chat/post', {name, call, email, text})
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })
    },

    // Delete news by url
    deleteComment(id) {
        return instance.delete(`chat/delete/${id}`).then(response => {
            return response
        }).catch((error) => {
            return error.response
        })
    },
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
    },

    // Get list of photos
    getPhotos() {
        return instance.get('photos/')
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })
    },

    // Delete photo by ID
    deletePhoto(id) {
        return instance.delete(`photos/delete/${id}`).then(response => {
            return response
        }).catch((error) => {
            return error.response
        })
    },
}


export const GalleryAPI = {
//    Get gallery posts list
    getPosts() {
        return instance.get('gallery/')
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })
    },

//    Add gallery post
    postPost(name_ru, name_en, images) {
        return instance.post(`gallery/post`, {name_ru, name_en, images})
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })

    },
    // Delete gallery post
    deleteGalleryPost(id) {
        return instance.delete(`gallery/delete/${id}`).then(response => {
            return response
        }).catch((error) => {
            return error.response
        })
    },
}


export const SponsorsAPI = {
    // Get donaters list
    getSponsors() {
        return instance.get(`sponsors/`)
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            });
    },

    // Post sponsor
    postSponsor(name, category, img) {
        return instance.post(`sponsors/create`, {name, category, img})
            .then(response => {
                return response
            }).catch((error) => {
                return error.response
            })

    },

    // Delete sponsor by name
    deleteSponsor(id) {
        return instance.delete(`sponsors/delete/${id}`).then(response => {
            return response
        }).catch((error) => {
            return error.response
        })
    },

}