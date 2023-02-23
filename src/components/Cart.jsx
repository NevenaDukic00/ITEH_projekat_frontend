import React from 'react'
import SingleBook from './SingleBook';



function Cart({books}) {

 
  console.log(books);
    if (books == null) {
        return (
          <div className="emptyCart">
            The cart is empty!
          </div>
        );
      } else {
        return (
      
          <div className="cart">
          
            <div className='products'>
            {books.map((product) => {       
             return <SingleBook
                product={product}
                key = {product.id}
                flag = {0}
              />
            })}
           </div>
           </div>
  
            
             
        );
    }
          
      
      
    
  }

export default Cart