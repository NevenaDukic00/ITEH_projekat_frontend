import React from "react";
import "../css/singleBook.css";
import axios from "axios";
import SingleBook from "./SingleBook";
import { useEffect } from "react";
import "../css/books.css";
import { useState } from "react";

function Books({ books, addToCart, removeFromCart, deleteBook, user }) {

  
 
  
  const filtered = books?.map((book) => (

    <SingleBook
      key={book.id}
      book={book}
      flag={1}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      deleteBook={deleteBook}
      user={user}
    />
  ));

  return <div className="homepage">{filtered}</div>;
  {
    /* {books == null ? <></> : { filtered }}</div>; */
  }
}

export default Books;
