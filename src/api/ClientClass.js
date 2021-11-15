import axiosClient from './axios'   

const getClass = () => {
    return axiosClient.get('class')
}

const createClass = (data) => {
    return axiosClient.post('/class', data)
}

const getClassItem = (id) => {
    return axiosClient.get(`/class/${id}`)
}

export {
    getClass,
    createClass,
    getClassItem
}