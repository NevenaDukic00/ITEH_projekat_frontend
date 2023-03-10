import './App.css';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Books from './components/Books';
import Cart from './components/Cart';
import { useEffect } from 'react';
import Addbook from './components/Addbook';
import Information from './components/Information';
import {images} from './images/gallery-image';
import axios from 'axios';

function App() {

  const[token,setToken] = useState();
  const[user,setUser] = useState({});

  const [cartProducts, setCartProducts] = useState([]);
  const [numProducts, setNumProducts] = useState(0);

  const[booksProducts,setBook] = useState();
 

  useEffect(()=>{
    
    console.log("Books je: " + booksProducts);
     if(booksProducts==null){
       console.log("Odlazi po knjige!");
       axios.get("http://127.0.0.1:8000/api/books")
       .then((res)=>{
         console.log(res.data);
         setBook(res.data.data);
         console.log("Books: " + booksProducts);
         setProducts(res.data.data);
         
         
       })
       .catch((e)=>{console.log(e);},[booksProducts]);
     }
   });
  

  function addToken(auth_token){
    setToken(auth_token);
  }
  
  function addUser(user){

    setUser(user);
    console.log("Postalvjamo user");
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
          console.log("U korpi ove knjge: " + product.amount);
          console.log("dodaje u korpu: " + product.name);
          setNumProducts(numProducts+1);
          product.amount++;
          console.log("Kolicina je:" + product.amount);
          refreshCart();
        
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

    function setToken1(){
      setToken(null);
    }
  

  return (
    <div className="App">
      <BrowserRouter className="App">
      <NavBar  token = {token}  flag = {user===undefined? 1:user} setToken={setToken1}/>
      <Routes>
        <Route
          path="/"
          element={
            <Books
            books = {booksProducts}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            
            />
          }
        />
        <Route path='/login' element={<Loginpage addToken={addToken} addUser = {addUser}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        
        <Route
          path="/cart"
          element={
            <Cart 
            cartProducts={cartProducts} 
            numProducts = {numProducts}
            token={token}/>
          }
        />

       <Route path='/addbook' element={user && <Addbook user = {user}/>}></Route>
       <Route
          path="/information"
          element={
            <Information items={images}/>
            
          }
        />
       
      </Routes>
      
    </BrowserRouter>
    </div>
  );
        
}

export default App;
