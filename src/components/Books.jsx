import React from 'react'
import '../css/singleBook.css';
import axios from 'axios';
import SingleBook from './SingleBook';
import { useState,useEffect } from 'react';
import '../css/books.css';

function Books() {

  const[books,setBook] = useState();
  useEffect(()=>{
    if(books==null){
      axios.get("api/books")
      .then((res)=>{
        console.log(res.data);
        setBook(res.data.data);
        console.log("Books: " + books);
      })
      .catch((e)=>{console.log(e);},[books]);
    }
  });

 
  function showDetails(book){

  }
   
  return (
    <div className='homepage'>
    
   
    {books==null? <>USao u ovo da je rpazno</>:
    books.map((book) => <SingleBook book={book} flag = {1} key = {book.id} showDetails = {showDetails}/>)}
    
   
    </div>
  );
 
}

export default Books