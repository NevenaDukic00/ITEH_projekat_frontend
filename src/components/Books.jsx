import React from "react";
import "../css/singleBook.css";
import axios from "axios";
import SingleBook from "./SingleBook";
import { useEffect } from "react";
import "../css/books.css";
import { useState } from "react";

function Books({ books, addToCart, removeFromCart }) {
  return (
    <div className="homepage">
      {books == null ? (
        <></>
      ) : (
        books.map((book) => (
          <SingleBook
            book={book}
            flag={1}
            key={book.id}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
}

export default Books;
