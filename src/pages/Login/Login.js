import React, {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';
import {normalLogin, googleLogin} from 'api/ClientUser'

export default function Login(props) {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const responseFacebook = (res) => {
        console.log(res)
    }

    const navigate = useNavigate()

    const responseGoogle = (res) => {
        if (res.error) {
            alert("error")
        }
        else {
            let information = {
                name: res.profileObj.name,
                email: res.profileObj.email,
                password: "",
                phone: "",
                address: "",
                type: 1
            }
            googleLogin({
                email: information.email,
            })
            .then(
                res => {
                    // check response
                    console.log(res)
                    if (res.data.error) {
                        // invalid user
                        // navigate to select role
                        navigate('/register/role', {state: {
                            information : information,
                            accountType : "google"
                        }})
                    }
                    else {
                        // login success
                        onLoginSuccess("lecturer", "john", res.data.token)
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        let information = {
            email: loginForm.email,
            password: loginForm.password
        }
        normalLogin(information)
        .then((res) => {
            if (res.data.status === 'error') {
                alert(res.data.error)
            }else {
                console.log(res.data)
                onLoginSuccess("lecturer", "john", res.data.token, res.data.refreshToken)
            }
        })

    }

    const onLoginSuccess = (status, name, token, refreshToken) => {
        // store token to localStorage
        localStorage.setItem('token', token)
        localStorage.setItem('status', status)
        localStorage.setItem('name', name)
        localStorage.setItem('refreshToken', refreshToken)
        props.setStatus({
            status: status,
            name: name
        })
        navigate("/")
    }

    return (
        <div>   
            <div class="container py-5 h-100">
                <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image"/>
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={onSubmitHandler}>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">Email address</label>
                            <input type="email" id="email" class="form-control form-control-lg" value={loginForm.email} onChange={(event) => {setLoginForm({...loginForm, email: event.target.value})}} />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="password">Password</label>
                            <input type="password" id="password" class="form-control form-control-lg" value={loginForm.password} onChange={(event) => {setLoginForm({...loginForm, password: event.target.value})}} />
                        </div>

                        <p>If you don't have an account
                        <Link to="/register">
                            , register now !
                        </Link>
                        </p>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <a>Forgot password?</a>
                        </div>

                        <button type='submit' class="btn btn-primary btn-lg btn-block" disabled={loginForm.email === "" || loginForm.password === "" ? true : false}>Log in</button>
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>
                            <FacebookLogin
                            class="btn btn-primary btn-lg btn-block"
                            appId={process.env.REACT_APP_FACEBOOK_LOGIN}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="btn btn-primary btn-lg btn-block"
                            />
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_LOGIN}
                            render={renderProps => (
                                <button className="btn btn-primary btn-lg btn-block" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                              )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}
