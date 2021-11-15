import React, {useEffect, useState } from 'react'
import {getClassItem} from 'api/ClientClass'
import {useNavigate, useParams, Link} from 'react-router-dom'
import MenuIcon from 'resources/icons/menu.svg'

export default function ClassItem(props) {
    const navigate = useNavigate()
    const id = useParams().id

    const [information, setInformation] = useState({})

    // list information of student and lecturer
    const [student, setStudent] = useState([])
    const [lecturer, setLecturer] = useState([])

    useEffect(() => {
        let status = localStorage.getItem("status")
        if (status === "guest"){
            navigate("/login")
        }else {
            getClassItem(id)
            .then(res => {
                setInformation(res.data)
            })
            .catch(err => {
                navigate(-1)
            })
        }
    }, [])

    const showClassInformation = () => {
        return (
            <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        )
    }

    return (
        <div className='m-5 mt-2'>
             <div className='row'>
                <h2 className='col m-1'>
                    Class information 
                </h2>
                    {props.clientStatus.status === "lecturer" ? (
                            <div className='col'>
                                <button className='btn btn-primary'>Invite</button>
                            </div>
                        ) : null}
            </div>

            <div className='m-1 mt-4'>

                {
                    console.log(information)
                }
                <p className='row m-0'>
                    <strong className='fs-4 col-2'>Class name : </strong>
                    <p className='fs-4 col m-0'>{information.name}</p>
                </p>
                <p className='row m-0'>
                    <strong className='fs-4 col-2'>Description : </strong>
                    <p className='fs-4 col m-0'>{information.description}</p>
                </p>
                <p className='row m-0'>
                    <strong className='fs-4 col-2'>Start time : </strong>
                    <p className='fs-4 col m-0'>{information.startTime.substring(0,10)}</p>
                </p>
                <p className='row m-0'>
                    <strong className='fs-4 col-2'>Update at : </strong>
                    <p className='fs-4 col m-0'>{information.updatedAt.substring(0,10)}</p>
                </p>
               
            </div>
        </div>
    )
}
