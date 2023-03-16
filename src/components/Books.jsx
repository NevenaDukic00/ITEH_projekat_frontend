import React from "react";
import "../css/singleBook.css";
import axios from "axios";
import SingleBook from "./SingleBook";
import { useEffect } from "react";
import "../css/books.css";
import { useState } from "react";

function Books({ books, addToCart, removeFromCart, deleteBook, user,updatePrice }) {

  
 
  
  // const filtered = books?.map((book) => (

    // <SingleBook
    //   key={book.id}
    //   book={book}
    //   flag={1}
    //   addToCart={addToCart}
    //   removeFromCart={removeFromCart}
    //   deleteBook={deleteBook}
    //   user={user}
    //   updatePrice = {updatePrice}
    // />
  // ));

  // return <div className="homepage">{filtered}</div>;
  // {
  //   /* {books == null ? <></> : { filtered }}</div>; */


  // }
  return (
    <div className='homepage'>


    {books==null? <>USao u ovo da je rpazno</>:
    books.map((book) => 
    <SingleBook
      key={book.id}
      book={book}
      flag={1}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      deleteBook={deleteBook}
      user={user}
      updatePrice = {updatePrice}
    />)}


    </div>
  );
   
  
}

export default Books;
