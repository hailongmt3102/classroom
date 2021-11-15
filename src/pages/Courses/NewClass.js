import React, {useEffect, useState} from 'react'
import {createClass} from 'api/ClientClass'
import {useNavigate} from 'react-router-dom'

export default function NewClass(props) {
    const navigate = useNavigate()

    useEffect(() => {
        let status = localStorage.getItem("status")
        if (status === "guest"){
            navigate("/login")
        }
    }, [])

    const [information, setInformation] = useState({})

    const submit = (e) => {
        e.preventDefault()
        createClass(information)
        .then(res => {
            alert("Create new class successful")
        })
        .catch(err => {
            alert(err)
        })
    }

    return (
        <form className='m-5 mt-2' onSubmit={submit}>
            <h2>
                Create new class
            </h2>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Class name <strong className='text-danger'>*</strong></label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(event) => {setInformation({...information, name: event.target.value})}} required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Description <strong className='text-danger'>*</strong></label>
                <input type="text" className="form-control" id="exampleInputPassword1" onChange={(event) => {setInformation({...information, description: event.target.value})}} required />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Start time </label>
                <input className='m-2' type="date" id="exampleInputPassword11" onChange={(event) => {setInformation({...information, startTime: event.target.value})}}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Complete time</label>
                <input className='m-2' type="date" id="exampleInputPassword11" onChange={(event) => {setInformation({...information, completedTime: event.target.value})}}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
