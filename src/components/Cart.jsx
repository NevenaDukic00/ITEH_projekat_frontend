import React from 'react'
 import '../css/cart.css';
import Table from './Table';
import '../css/table.css';
function Cart({cartProducts}) {
 
 
  if (cartProducts == null) {
    return (
      <div className="emptyCart">
        The cart is empty!
      </div>
    );
  } else {
    return (
      <div className='table'>
      <Table cartProducts = {cartProducts}></Table>
      </div>
  );
}

 
}
export default Cart