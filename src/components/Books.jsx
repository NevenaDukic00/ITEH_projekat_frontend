import React from 'react'
import '../css/singleBook.css';
import axios from 'axios';
import SingleBook from './SingleBook';
import { useEffect } from 'react';
import '../css/books.css';
import { useState } from 'react';

function Books({setProducts,addToCart,removeFromCart}) {

  const[books,setBook] = useState();

  useEffect(()=>{
    
    if(books==null){
      axios.get("api/books")
      .then((res)=>{
        console.log(res.data);
        setBook(res.data.data);
        console.log("Books: " + books);
        setProducts(res.data.data);
      })
      .catch((e)=>{console.log(e);},[books]);
    }
  });


   
  return (
    <div className='homepage'>
    
   
    {books==null? <></>:
    books.map((book) => <SingleBook book={book} flag = {1} key = {book.id} addToCart = {addToCart} removeFromCart = {removeFromCart}/>)}
    
   
    </div>
  );
 
}

export default Books