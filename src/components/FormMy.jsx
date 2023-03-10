import React, { useState } from 'react'
import $ from 'jquery'
import jquery from 'jquery'
import { Form } from 'react-router-dom';
import '../css/form.css';
import jsPDF from 'jspdf'
import axios from 'axios';
function FormMy({totalPrice, numProducts,token,cartProducts,user,emptyTable}) {

  console.log(token);
  const[t,setToken] = useState(token);
 
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
      if (
        $("#firstname").val() &&
        $("#lastname").val() &&
        $("#email").val() &&
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
        $("#firstname").val() +
        "\nLastname: " +
        $("#lastname").val() +
        "\nEmail: " +
        $("#email").val() +
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
      } else {
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
        placeholder="Enter firstname"
        name="firstname"
        id="firstname"
        disabled={t===null? true:false}
      ></input>

      <label htmlFor="lastname">Lastname:</label>
      <input
        type="text"
        placeholder="Enter lastname"
        name="lastname"
        id="lastname"   
        disabled={t==null? true:false}
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        id="email"
        disabled={t==null? true:false}
      ></input>

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        placeholder="Enter address"
        name="address"
        id="address"
        disabled={t==null? true:false}
      ></input>
      <div className='price'>Total amount: {numProducts}</div>
      <div className='individualTotal'>Total price: {totalPrice()}</div>
      <input type="submit" className="submit" value="SUBMIT" ></input>
       

      </div>
      
      
    </form>
  )
}

export default FormMy