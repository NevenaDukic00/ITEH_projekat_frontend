import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../css/login.css';
import Combobox from "react-widgets/Combobox";
import Select from 'react-select'

function Addbook({genres}) {
  
//   const[genre,setGenre] = useState();
//   const[bookData,setBook] = useState({
//     name: "",
//     author:"",
//     publisher:"",
//     shortDescription:"",
//     price:"",
//     genre:"",
//     image:""

//   }); 
  
//   if(genre==null && genres!==undefined){
      
//     const newGenres = [];
//    console.log("U Add book genres su : " + genres);
//    console.log("ULAZI DA PUNI LISTU");
//    genres.forEach(u => {
//      newGenres.push({
//        label: u.name_g,
//        value: u.id
//     })
//    });

//    setGenre(newGenres);
//  }
  
 
  

  

 
//     return (
//       <div className="Auth-form-container">
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign In</h3>
//           <div className="form-group mt-3">
//             <label>Name</label>
//             <input
//               type="name"
//               className="form-control mt-1"
//               placeholder="Enter name"
//               name = "name"
//            //   onInput={handleInput}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Author</label>
//             <input
//               type="author"
//               className="form-control mt-1"
//               placeholder="Enter author"
//               name = "author"
//              // onInput={handleInput}
//             />
//           </div>
//          {<Select
//   options={genre}/>}
//   {/* // getOptionLabel={(option)=>option.name_g}
//   // getOptionValue={(option)=>option.id} */}

//           {/* <div className="form-group mt-3">
//             <label>Genre</label>
//             <Combobox
//             name = "genre"
//             data={genres.name_g}
//             />;
//           </div> */}
//           <div className="form-group mt-3">
//             <label>LastName</label>
//             <input
//               type="lastName"
//               className="form-control mt-1"
//               placeholder="Enter last name"
//               name = "lastName"
//             //  onInput={handleInput}
//             />
//           </div>
          
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Register
//             </button>
//           </div>
          
//         </div>
//       </form>
//     </div>
//     );
  
}
export default Addbook;

