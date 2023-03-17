import React, { useState } from "react";
import "../css/singleBook.css";
import { BsPlusLg, BsDashLg, BsXCircle } from "react-icons/bs";
function SingleBook({
  book,
  flag,
  addToCart,
  removeFromCart,
  deleteBook,
  user,
  updatePrice,
}) {
  console.log(book);

  const [newPrice, setNewPrice] = useState(0);

  function handleInput(e) {
    console.log(e);
    var discount = e.target.value;
    if (/[0-9]/.test(e.target.value)) {
      console.log("Popust je: " + discount);
      setNewPrice((book.price * (100 - discount)) / 100);
      // setPrice(book,discount);
    }
  }

  function updatePrice1(book, newPrice) {
    updatePrice(book, newPrice);
  }

  return (
    <div className={flag === 1 ? "singleBook" : "inCart"}>
      <div className="card bg-transparent border-0">
        <div className="row g-0">
          <div className="col-5 col-sm-4">
            <img
              src={book.url}
              className="img-fluid w-100"
              alt="card-horizontal-image"
            />
          </div>
          {flag === 1 ? (
            <div className="col-7 col-sm-8">
              <div className="card-body">
                <h5 className="card-title text-white text-center">
                  {book.name}
                </h5>
                <p className="card-text text-white">{book.description}</p>
                {/* <p className="card-text text-white">{book.genre.name_g}</p> */}
                <div className="p card-text text-white">
                  <div className="price">Price: {parseFloat(book.price).toFixed(2)}RSD</div>
                  {user==undefined || (user!=undefined && user.email!=="admin@gmail.com")?
                  <div className="individualTotal">Amount: {book.amount}</div>:<div></div>
                }    </div>
              </div>{" "}
            </div>
          ) : (
            <div className="text-white"> {book.name}</div>
          )}
        </div>
      </div>

      <div>
          
          {user!=undefined && user.email==="admin@gmail.com"? 
           <div></div>:<div className="buttons">
            <div className="b" onClick={() => addToCart(book.id)}>
              <BsPlusLg /></div>
              <div className="b" onClick={() => removeFromCart(book.id)}>
              <BsDashLg />
            </div></div>
             }
           
      </div>
      {/* </div> */}
      {/* ); */}
      {/* {flag===1? <div className="col-7 col-sm-8">
      <div className="card-body">
        <h5 className="card-title text-white text-center">{book.name}</h5>
        <p className="card-text text-white">{book.description}</p>
        <p className="card-text text-white">{book.genre.name_g}</p>
        <div className='p card-text text-white'>
         <div className='price'>Price: {(parseFloat(book.price).toFixed(2))}</div>
        <div className='individualTotal'>Amount: {book.amount}</div>
         </div>
       
      </div> </div> :
      <div className="text-white"> {book.name}</div>}
    
   
    
  </div>
</div>


<div className='buttons'>
    {flag===1 ? <> */}
      {/* { user==undefined || (user!==undefined && user.email!="admin@gmail.com")?
    <div className='buttons'><div className='b' onClick={() => addToCart(book.id)}>
    <BsPlusLg/>
    </div>
    
    <div className='b' onClick={() => removeFromCart(book.id)}>
    <BsDashLg/>
    </div></div>:<></>}
      
    {user!=undefined && user.email==="admin@gmail.com"? <div className='b' onClick={() => deleteBook(book.id)}>
    <BsXCircle/>
    </div>:<></>}
   
    </>:<></>}

    

    
    </div> */}

      {user !== undefined && user.email == "admin@gmail.com" ? (
        <div className="discount">
          <div>
            <input
              type="text"
              placeholder="Enter discount:"
              name="discount"
              id="discount"
              onInput={handleInput}
            ></input>{" "}
          </div>
          <div>
            <input
              type="text"
              placeholder={newPrice}
              name="discount"
              id="discount"
              disabled="false"
            ></input>{" "}
          </div>
          <div className="buttons">
          <div className="b" onClick={() => updatePrice1(book, newPrice)}>
            <BsPlusLg />
          </div>
          <div className="b" onClick={() => deleteBook(book.id)}>
                <BsXCircle />
              </div>
              </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SingleBook;
