import axiosClient from './axios'   

const getClass = () => {
    return axiosClient.get('class')
}

export {
    getClass,
}