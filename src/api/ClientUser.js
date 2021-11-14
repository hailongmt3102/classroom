import axiosClient from './axios'   

const normalLogin = (data) => { 
    return axiosClient.post('users/login', data)
}

const googleLogin = (data) => { 
    return axiosClient.post('users/login/google', data)
}

const studentRegister = (data) => {
    return axiosClient.post('users/register', data)
}

const lecturerRegister = (data) => {
    return axiosClient.post('users/teacher/register', data)
}


export {
    normalLogin,
    googleLogin,
    studentRegister,
    lecturerRegister
}