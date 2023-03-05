import React from 'react'
import '../css/singleBook.css';
import { BsPlusLg, BsDashLg} from "react-icons/bs";
function SingleBook({book,flag,addToCart,removeFromCart}) {

  console.log(book);
  
  return (

 <div className={flag === 1 ? "singleBook" : "inCart"}>


<div className="card bg-transparent border-0">
  <div className="row g-0">
    
    <div className="col-5 col-sm-4">
      <img src={book.url} className="img-fluid w-100" alt="card-horizontal-image"/>
    </div>
    {flag===1? <div className="col-7 col-sm-8">
      <div className="card-body">
        <h5 className="card-title text-white text-center">{book.name}</h5>
        <p className="card-text text-white">{book.description}</p>
        <div className='p card-text text-white'>
         <div className='price'>Price: {book.price}</div>
        <div className='individualTotal'>Amount: {book.amount}</div>
         </div>
       
      </div> </div> :
      <div className="text-white"> {book.name}</div>}
    
    
  </div>
</div>


<div className='buttons'>
    {flag===1? <>
      <div className='b' onClick={() => addToCart(book.id)}>
    
    <BsPlusLg/>
    </div>
    
    <div className='b' onClick={() => removeFromCart(book.id)}>
    <BsDashLg/>
    </div>
    </>:<></>}

    

    
    </div>
    
</div> 


  )
}

export default SingleBook;