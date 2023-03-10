import React from 'react'
 import '../css/cart.css';
import Table from './Table';
import '../css/table.css';
import FormMy from './FormMy';
import { useState } from 'react';
import { useEffect } from 'react';
function Cart({cartProducts,numProducts,token}) {
 
  

  console.log("U korpi: " + numProducts);
  function totalPrice(){
    var price = 0;
    cartProducts.forEach((product) => {
      price = price + product.price*product.amount;

    })
    return price;
  };
  
  
 
  if (cartProducts == null) {
    return (
      <div className="emptyCart">
        The cart is empty!
      </div>
    );
  } else {
    return (
      <div className='cart'>
      <div className='table'>
      <Table cartProducts = {cartProducts}></Table>
      </div>
      <div className='form'> 
      <FormMy
            numProducts={numProducts}
            totalPrice = {totalPrice}
            token={token}
           />
      </div>
      </div>
  );
}

 
}
export default Cart