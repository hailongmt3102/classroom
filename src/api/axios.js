import axios from "axios";
import {useNavigate} from 'react-router-dom'


const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
    headers : {
        'Access-Control-Allow-Origin' : '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
})

axiosClient.interceptors.request.use(
    (request) => {
        var token = localStorage.getItem("token")
        console.log(token)
        if (token != null)
            request.headers.authorization =`Bearer ${token}`
        return request
    },
    error => {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
)

axiosClient.interceptors.response.use(
    (response) => {
        return new Promise((resolve, reject) => {
            resolve(response)
        })
    },
    error => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
        if (error.response.status === 401) {
            localStorage.removeItem("token")
            localStorage.removeItem("status")
            localStorage.removeItem("name")
            return new Promise((resolve, reject) => {
                reject("login require")
            })
        }
    }
)

export default axiosClient
