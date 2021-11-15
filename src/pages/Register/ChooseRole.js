import React, {useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {lecturerRegister, studentRegister} from 'api/ClientUser'


export default function ChooseRole() {
    const nav = useNavigate()
    const location = useLocation()

    const [information, setInformation] = useState({
    })

    const [accountType, setAccountType] = useState("")

    useEffect(() => {
        // get data from previous page
        setInformation(location.state.information)
        setAccountType(location.state.accountType)

        if (information == null || accountType == null) {
            nav("/register")
        }else if (information.name === "" || information.email === "" || information.password === ""){
            nav("/register")
        }
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        // create new account
        if (information.type === 1){
            studentRegister(information)
            .then(res => {
                // execute result
                if (res.data.error) {
                    alert(res.data.error)
                }else {
                    alert("Create new account successful")
                    nav('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }else {
            lecturerRegister(information)
            .then(res => {
                // execute result
                if (res.data.error) {
                    alert(res.data.error)
                }else {
                    alert("Create new account successful")
                    nav('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }   

    const back = () => {
        nav(-1)
    }

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Please select the role of you</h3>

                            <form>
                            <div className="row">
                                <div className="form-check form-check-inline col">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="maleGender"
                                    value="option2"
                                    checked={information.type === 1 ? true : false}
                                    onClick={() => {setInformation({...information, type:1})}}
                                    />
                                    <label className="form-check-label" for="maleGender">Student</label>
                                </div>

                                <div className="form-check form-check-inline col">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="femaleGender"
                                    value="option1"
                                    checked={information.type === 2 ? true : false}
                                    onClick={() => {setInformation({...information, type:2})}}
                                    />
                                    <label className="form-check-label" for="femaleGender">Lecturer</label>
                                </div>

                            </div>
                            <div className='row'>
                                {accountType === "normal" ? (
                                    <div className="mt-4 pt-2 col">
                                        <input className="btn btn-primary btn-lg" type="button" onClick={back} value="Back" />
                                    </div>
                                ) : null}
                               
                                <div className="mt-4 pt-2 col">
                                    <input className="btn btn-primary btn-lg" type="button"  onClick={submit} value="Submit" />
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
}
