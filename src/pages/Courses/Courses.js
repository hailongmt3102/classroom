import React, {useEffect, useState} from 'react'
import {getClass} from 'api/ClientClass'
import {getNewToken} from 'api/ClientUser'
import {Link, useNavigate} from 'react-router-dom'

export default function Courses(props) {
    const navigate = useNavigate()
    const [classes, setClasses] = useState([])
    useEffect(() => {
        let status = localStorage.getItem("status")
        if (status === "guest"){
            navigate("/login")
        }else{
            getClass()
            .then(res => {
                console.log(res)
                setClasses(res.data)
            })
            .catch(err => {
                if (err === "login require") {
                    // get refresh token 
                    let refreshToken = localStorage.getItem("refreshToken")
                    if (refreshToken == null){
                        navigate("/login")
                    }else{
                        // try to get new token
                        getNewToken({
                            token : refreshToken
                        }).then(res => {
                            localStorage.setItem("refreshToken", res.refreshToken)
                            localStorage.setItem("token", res.token)
                        })
                        .catch(err => {
                            navigate("/login")
                        })
                    }
                }
                else {
                    alert(err)
                }
            })
        }
    }, [])

    return (
        <div className='m-5 mt-2'>
            <div className='row'>
                <h2 className='col m-1'>Current classes</h2>
                {props.clientStatus.status === "lecturer" ? (
                    <div className='col'>
                        <Link to="new">
                            <button className='btn btn-primary'>Create new class</button>
                        </Link>
                    </div>
                ) : null}
            </div>
            <div className="list-group mt-2">
                {
                    classes.length != undefined ?
                    (classes.map(value => {
                        return(
                            <Link to={value._id} key={value._id} className="list-group-item list-group-item-action" >{value.name}</Link>
                        )
                    })) : null
                }   
           
            </div>
        </div>
    )
}
