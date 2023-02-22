import React from 'react'
import '../css/singleBook.css';
import { BsPlusLg, BsDashLg} from "react-icons/bs";
function SingleBook({book,flag,addToCart,removeFromCart}) {

  
  return (

 <div className={flag === 1 ? "singleBook" : "inCart"}>

<div className="card bg-transparent border-0">
  <div className="row g-0">
    <div className="col-5 col-sm-4">
      <img src={book.url} className="img-fluid w-100" alt="card-horizontal-image"/>
    </div>
    <div className="col-7 col-sm-8">
      <div className="card-body">
        <h5 className="card-title text-white text-center">{book.name}</h5>
        <p className="card-text text-white">{book.description}</p>
        <p className="card-text"><small className="text-white">Price : {book.price}</small></p>
      </div>
    </div>
  </div>
</div>

{/* <img src={book.url}alt="Images" height={200} width={150}/> 


<div className='title'>{book.name}</div>

{flag === 2 ? <div className="desc">{book.desc}</div> : <></>}


<div className='price'>{book.price}</div> */}

<div className='buttons'>
    {flag===1? <>
      <div className='b' onClick={() => addToCart(book.id)}>
    
    <BsPlusLg/>
    </div>
    
    <div className='b' onClick={() => removeFromCart(book.id)}>
    <BsDashLg/>
    </div>
    </>:( <h4 className="amount"> Amount: {book.amount}</h4>)}

    

    
    </div>
    
</div> 


  )
}

export default SingleBook;