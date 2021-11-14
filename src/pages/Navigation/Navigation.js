import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import IcLogout from 'resources/icons/logout.svg'
import IcProfile from 'resources/icons/profile.svg'

function Navigation(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <div className="navbar-brand">
            Logo
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                  <li className="nav-item">
                      <a className="nav-link active" aria-current="page">Home</a>
                  </li>
              </Link>
              <Link to="/courses">
              <li className="nav-item">
                      <a className="nav-link">Courses</a>
              </li>
              </Link>
          </ul>
              {props.state.status === "guest" ? 
                (
                <Link to="/login">
                  <button className="btn" onClick={props.login}>
                    <div className="row"> 
                      <div className="col rounded-circle bg-info">
                        <img src={IcProfile}/>
                      </div>
                      <h5 className="col">Login</h5>
                    </div>
                  </button>
                </Link>
                ) : 
                (
                <button className="btn">
                  <div className="row"> 
                    <div className="col rounded-circle bg-info">
                      <h5 className="m-auto">{props.state.name.toString()[0].toUpperCase()}</h5>
                    </div>
                    <h5 className="col">{props.state.name}</h5>
                  </div>
                </button>
                )} 
          {props.state.status !== "guest" ? (
            <Link to="/">
              <button className="btn mb-2" onClick={props.logout}>
                <img src={IcLogout}/>
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Navigation;