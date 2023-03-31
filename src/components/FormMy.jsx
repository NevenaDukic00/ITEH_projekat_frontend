import React, { useState } from 'react'
import $ from 'jquery'
import jquery from 'jquery'

import '../css/form.css';
import jsPDF from 'jspdf'
import axios from 'axios';
function FormMy({totalPrice, numProducts,token,cartProducts,user,emptyTable}) {

  console.log(token);
  console.log("user je: " + user);
  
  function generatePDF(data) {
    var doc = new jsPDF('p', 'pt');
    
    doc.text(20, 20, data)
    doc.addFont('helvetica', 'normal')     
    
    doc.save('demo.pdf')
  }   

  const orderBook = {
    amount:"",
    user_id:"",
    book_id:""
  };

  console.log("Total price je: " + totalPrice());
  jquery(function () {
    $("#form").on("submit", function (e) {
      e.preventDefault();
      console.log("Ukupna cena je: " + totalPrice());
      if(totalPrice()==0){

        return;
      }
      if (
        $("#address").val() 
      ) {
        cartProducts.forEach(book => {
          orderBook.amount = book.amount;
          orderBook.user_id = user.id;
          orderBook.book_id = book.id;
          console.log(orderBook);
          axios.post("http://127.0.0.1:8000/api/orderedBooks",orderBook)
       .then((res)=>{
        console.log(res.data);
        })
        .catch((e)=>{ console.log(e);});
        });
       
        let data =  "Vasa narudzbina je uspesno primljena!\n<Shipping details>" +
        "\nFirstname: " +
        user.firstName +
        "\nLastname: " +
        user.lastName +
        "\nEmail: " +
        user.email +
        "\nAddress: " +
        $("#address").val() +
        "\nTotal price: " +
        totalPrice() +
        "$" +
        "\nTotal number of products: " +
        numProducts;
        generatePDF(data);
        emptyTable();
        // alert(
          // "<Shipping details>" +
          //   "\nFirstname: " +
          //   $("#firstname").val() +
          //   "\nLastname: " +
          //   $("#lastname").val() +
          //   "\nEmail: " +
          //   $("#email").val() +
          //   "\nAddress: " +
          //   $("#address").val() +
          //   "\nTotal price: " +
          //   totalPrice() +
          //   "$" +
          //   "\nTotal number of products: " +
          //   numProducts
        // );
      } else if( !$("#address").val()){
        alert("All fields are required!");
      }
    });
  });
  

  return (
    <form action="." id="form"  >
    <h1 className="headerCart">Cart</h1>
    <div className="formCart">
      <label htmlFor="firstname">Firstname:</label>
      <input
        type="text"
        placeholder= {user!==undefined?user.firstName:""}
        name="firstname"
        id="firstname"
        disabled= "false"
      ></input>

      <label htmlFor="lastname">Lastname:</label>
      <input
        type="text"
        placeholder= {user!==undefined?user.lastName:""}
        name="lastname"
        id="lastname"   
        disabled="false"
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        placeholder= {user!==undefined?user.email:""}
        name="email"
        id="email"
        disabled="false"
      ></input>

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        placeholder="Enter address"
        name="address"
        id="address"
        disabled={token==null? true:false}
      ></input>
      <div className='price'>Total amount: {numProducts}</div>
      <div className='individualTotal'>Total price: {totalPrice()}</div>
      <input type="submit" className="submit" value="SUBMIT" ></input>
       

      </div>
      
      
    </form>
  )
}

export default FormMy