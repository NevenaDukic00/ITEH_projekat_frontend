import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function NavBar({token}) {

  function handleLogout(){
    var config = {
      method: 'post',
      url: 'api/logout',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + token, 
      },
      
    };
    
    axios(config)
    .then(function (response) {
      console.log("Izloguj se!");

      window.sessionStorage.setItem("auth_token",null);
    })
    .catch(function (error) {
      console.log("Usao u gresku!");
      if (error.response.status === 401) {
        window.sessionStorage.setItem("auth_token",null);
      }
    });
    
  }
    return (
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Welcome</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarBasic">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {token==null?  <li className="nav-item">
              <a className="nav-link" href="/login">Log in</a>
            </li>: <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogout}>Log out</a>
            </li>}
           
            <li className="nav-item">
              <a className="nav-link" href="#">Register</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
      );
}

export default NavBar