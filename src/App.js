import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Books from './components/Books';
import Cart from './components/Cart';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const[token,setToken] = useState();
 

  const [cartProducts, setCartProducts] = useState([]);
  const [numProducts, setNumProducts] = useState(0);

  const[booksProducts,setBook] = useState([]);

  useEffect(()=>{
    
    
  });

  

  function addToken(auth_token){
    setToken(auth_token);
  }
  
  
  function refreshCart(){
   
    setCartProducts(booksProducts.filter((product) => product.amount > 0));
    
   
    
   
  }
  function setProducts(books){
    console.log("Ulazi da doda knjige");
    setBook(books);
    console.log(books);
  }


    function addToCart(id) {
      booksProducts.forEach((product) => {
        if (product.id === id) {
          console.log("dodaje u korpu: " + product.name);
          setNumProducts(numProducts+1);
          product.amount++;
          console.log(product.amount);
        
        //  refreshCart();
          //const updatedCartProducts = refreshCart();
         // setCartProducts(updatedCartProducts);
          
         
        }
    });
    }
  
    function removeFromCart(productID) {
      booksProducts.forEach((product) => {
        if (product.id === productID) {
          setNumProducts(numProducts - 1);
          
        }
      });
    }
 
  return (
    <div className="App">
     
      <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Books
            setProducts={setProducts}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            />
          }
        />
        <Route path='login' element={<Loginpage addToken={addToken}/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route
          path="/cart"
          
          element={<Cart books={cartProducts} />}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
