import React from 'react'
 import '../css/cart.css';
import Table from './Table';
import '../css/table.css';
import FormMy from './FormMy';

function Cart({cartProducts,numProducts,token,user,setCartProduct}) {
 


  console.log("U korpi: " + numProducts);
  function totalPrice(){
    var price = 0;
    cartProducts.forEach((product) => {
      price = price + product.price*product.amount;

    })
    return price;
  };
  
  function emptyTable(){
      setCartProduct();
  }
 
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
            cartProducts={cartProducts}
            user = {user}
            emptyTable = {emptyTable}
           />
      </div>
      </div>
  );
}

 
}
export default Cart