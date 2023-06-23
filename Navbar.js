import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import logo from'./cloud-storage.png';
// import logo from './logo.svg';

export default function Navbar(props) {
  return (
    <>
     {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid ">
      <a className="navbar-brand" href="/"><strong>{props.title}</strong></a> */}
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
    
       
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
       


        
        <form className="d-flex mx-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    {/* <img src={logo} className="App-logo " alt="logo"height="75px" width="75px" /> */}
   
          
          <a className="navbar-brand" href="/"><strong>
          {/* <img src={logo} className="App-logo " alt="logo"height="25px" width="75px" /> */}
            {props.title}</strong>
          
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Our Business</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our services 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Cloud Storage</a></li>
            <li><a className="dropdown-item" href="/">Website Hosting</a></li>
            <li><a className="dropdown-item" href="/">Analytics</a></li>
            <li><a className="dropdown-item" href="/">Database</a></li>
            <li><a className="dropdown-item" href="/">Internet of things</a></li>
          </ul>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex mx-4" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled dark mode</label>
        </div>
    </div>
  </div>
</nav>   
  </>
  
  )
  
}
Navbar.prototype={
            title: PropTypes.string.isRequired,
            aboutText: PropTypes.string.isRequired

}
Navbar.defaultProps={
    title:"SET title ",
    aboutText:"About"
    
}