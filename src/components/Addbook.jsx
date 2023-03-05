import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../css/login.css';
import Combobox from "react-widgets/Combobox";


function Addbook({user1}) {
  
  
  const[bookData,setBook] = useState({
    name: "",
    author:"",
    publisher:"",
    shortDescription:"",
    price:"",
    genre:"",
    image:""

  }); 

  const[genres,setGenres] = useState([]);
  
  
  function handleInput(e){
    console.log(e);
    let newBook = bookData;
    // newBook[e.target.name] =e.target.value;
    // console.log(newUserData);
    // setUserData(newUserData);
  }

  function handleRegister(e){
    // e.preventDefault();
    // axios.post("api/register",userDate)
    // .then((res)=>{
    //   console.log(res.data);
    //   navigate("/login");
    // })
    // .catch((e)=>{console.log(e);});
    
  }

 
  useEffect(()=>{
    
    console.log("User je u addBook: " + JSON.stringify(user1));
    if(user1!==undefined){
      axios.get("api/genres",user1)
    .then((res)=>{
      console.log(res.data);
     
  
    })
    .catch((e)=>{console.log(e);});
    }else{
    
    }
    
  });
 
    return (
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Enter name"
              name = "name"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Author</label>
            <input
              type="author"
              className="form-control mt-1"
              placeholder="Enter author"
              name = "author"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Genre</label>
            <Combobox
            name = "genre"
            data={genres}
            />;
          </div>
          <div className="form-group mt-3">
            <label>LastName</label>
            <input
              type="lastName"
              className="form-control mt-1"
              placeholder="Enter last name"
              name = "lastName"
              onInput={handleInput}
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          
        </div>
      </form>
    </div>
    );
  
}
export default Addbook;

