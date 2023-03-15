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
import Search from './components/Search';
import axios from 'axios';
import MyBooks from './components/MyBooks';

function App() {

  const[token,setToken] = useState();
  const[user,setUser] = useState({});

  const [cartProducts, setCartProducts] = useState([]);
  const [numProducts, setNumProducts] = useState(0);

  const[booksProducts,setBook] = useState();
  const[myBooks,setMyBooks] = useState();


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
    
     if(token!=null &&myBooks==null){
      console.log("IDE PO MOJE KNJIGE!");
      var config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/orderedBooks',
        headers: { 
          'Authorization': `Bearer ${token}`, 
          
        },
      };
      
      axios(config)
      .then(function (response) {
        console.log("Response je:");
        console.log(response.data.data);
        setMyBooks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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

    function deleteBook(bookID){
      var config = {
        method: 'delete',
      maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/books/' + bookID,
        headers: { 
          'Authorization': `Bearer ${token}`,
        },
        
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setBook((current) =>
        booksProducts.filter((book) => book.id !== bookID)
    );
      })
      .catch(function (error) {
        console.log(error);
      });
      // console.log("Odlazi po knjige!");
      //  axios.delete("http://127.0.0.1:8000/api/books/"+bookID)
      //  .then((res)=>{
      //    console.log(res.data);
      //    setBook(res.data.data);
      //    console.log("Books: " + booksProducts);
      //    setProducts(res.data.data);
         
         
      //  })
      //  .catch((e)=>{console.log(e);},[booksProducts]);
    }
    function setToken1(){
      setToken(null);
      setUser(undefined);
      setMyBooks();
    }
  
    function setCartProduct(){
      setCartProducts([]);
      setNumProducts(0);
      booksProducts.forEach(book => {
        if(book.amount>0){
          book.amount = 0;
        }
      });
    }
   
    
   function updatePrice(book,newPrice){
    if(newPrice!=0){
      var config = {
        method: 'put',
        url: 'http://127.0.0.1:8000/api/books/' + book.id,
        headers: { 
          'Authorization': `Bearer ${token}`,
        },
        data:{price:newPrice + ""}
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        booksProducts.forEach(book1 => {
          if(book.id===book1.id){
  
            book1.price = newPrice;
            
            console.log("Price je: " + book1.price);
            
          }
        });

      })
      .catch(function (error) {
        console.log(error);
      });
    }
   
   }

  return (
    <div className="App">
      <BrowserRouter className="App">
      <NavBar  token = {token}  flag = {user===undefined? 1:user} setToken={setToken1}/>
      <Routes>
        <Route
          path="/"
          //ovde sam stavila Books i umesto details = ... books =...
          element={
            <Books
            books = {booksProducts}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            deleteBook={deleteBook}
            user={user}
            updatePrice = {updatePrice}
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
            token={token}
            user = {user}
            setCartProduct={setCartProduct}
            />
          }
        />

       <Route path='/myBooks' element={ <MyBooks myBooks={myBooks}/>}></Route>
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
