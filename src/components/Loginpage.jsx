import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css';


function Loginpage() {
  
  const[userDate,setUserData] = useState({
    email: "",
    password:"",
    firstName:"",
    lastname:""
  }); 

  
  function handleInput(e){
    console.log(e);
    let newUserData = userDate;
    newUserData[e.target.name] =e.target.value;
    console.log(newUserData);
    setUserData(newUserData);
  }

  function handleRegister(e){
    console.log("USAo u login");
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/register",userDate)
    .then((res)=>{
      console.log(res.data.success);
      if(res.data.success=='true'){
        console.log("Usao u true");
        window.sessionStorage.setItem("auth_token",res.data.access_token);
      }

    })
    .catch((e)=>{console.log(e);});
    console.log("Prosao no gore");
  }

    return (
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name = "email"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name = "password"
              onInput={handleInput}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          Aren't register yet? <a href="#">REGISTER</a>
          </p>
        </div>
      </form>
    </div>
    );
  
}
export default Loginpage;
