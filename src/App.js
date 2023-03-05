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


function App() {

  const[token,setToken] = useState();
  const[user,setUser] = useState({});

  const [cartProducts, setCartProducts] = useState([]);
  const [numProducts, setNumProducts] = useState(0);

  const[booksProducts,setBook] = useState([]);
  const[flag,setFlag]= useState(0);

  useEffect(()=>{
    
    console.log("U App.js je : " + user);
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
    if(flag===0){

    
    console.log("Ulazi da doda knjige");
    setBook(books);
    console.log(books);
    setFlag(1);
    }
    
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

  
  return (
    <div className="App">
      <BrowserRouter className="App">
      <NavBar  token = {token}  flag = {user===undefined? 1:user}/>
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
        <Route path='/login' element={<Loginpage addToken={addToken} addUser = {addUser}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        
        <Route
          path="/cart"
          element={
            <Cart cartProducts={cartProducts} />
          }
        />

       <Route path='/addbook' element={user && <Addbook user = {user}/>}></Route>
       
      </Routes>
      
    </BrowserRouter>
    </div>
  );
        
}

export default App;
