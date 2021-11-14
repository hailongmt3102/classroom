import React, {useEffect} from 'react'
import {getClass} from 'api/ClientClass'
import {useNavigate} from 'react-router-dom'

export default function Courses() {
    const navigate = useNavigate()

    useEffect(() => {
        getClass()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            if (err === "login require") {
                navigate("/login")
            }
            else {
                alert(err)
            }
        })
    }, [])
    return (
        <div>
            courses
        </div>
    )
}
