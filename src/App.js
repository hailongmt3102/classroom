import React, {useState, useEffect} from 'react';

import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from './pages/Navigation/Navigation'
import Home from './pages/Home/Home'  
import Courses from './pages/Courses/Courses' 
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ChooseRole from './pages/Register/ChooseRole'
import ForgotPass from './pages/ForgotPass/ForgotPass'
import NewClass from './pages/Courses/NewClass' 
import ClassItem from './pages/Courses/ClassItem' 

function App() {
  const [clientStatus, setClientStatus] = useState({
    status: "guest",
    name: ""
  })

  useEffect(() => {
    let status = localStorage.getItem("status")
    let name = localStorage.getItem("name")
    if (status != null && name != null) {
      setClientStatus({
        status: status,
        name: name
      })
    }
  }, []);

  const LogoutBtn = () => {
    setClientStatus({
      status: "guest",
      name: ""
    })
    localStorage.removeItem("token")
    localStorage.removeItem("status")
    localStorage.removeItem("name")
    localStorage.removeItem("refreshToken")
  }

  const loginBtn = () => {
    
  }

  return (
    <Router>
        <div className="App">
            <Navigation state={clientStatus} login={loginBtn} logout={LogoutBtn} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/courses" exact element={<Courses clientStatus={clientStatus} />}/>
                <Route path="/courses/:id" exact element={<ClassItem clientStatus={clientStatus} />}/>
                <Route path="/courses/new" element={<NewClass clientStatus={clientStatus} />}/>
                <Route path="/login" element={<Login setStatus={setClientStatus}/>}/>
                <Route path="/register" exact element={<Register/>}/>
                <Route path="/register/role" element={<ChooseRole/>}/>
                <Route path="/forgotpassword" element={<ForgotPass/>}/>
                <Route path="*" element={<div>
                  <h1>Not found</h1>
                </div>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
