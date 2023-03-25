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
import Converter from './components/Converter';
import axios from 'axios';
import MyBooks from './components/MyBooks';
import Statistics from './components/Statistics';
import Quote from './components/Quote';
import "./App.css";

function App() {

  const[token,setToken] = useState();
  const[user,setUser] = useState({});

  const [cartProducts, setCartProducts] = useState([]);
  const [numProducts, setNumProducts] = useState(0);

  const[booksProducts,setBook] = useState();
  const[myBooks,setMyBooks] = useState();

  const[genres,setGenres] = useState();

  const[laguna, setLaguna] = useState(0);
  const[vulkan, setVulkan] = useState(0);
  const[lion, setLion] = useState(0);
  const[other, setOther] = useState(0);

  const[pride, setPride] = useState(0);
  const[thief, setThief] = useState(0);
  const[before, setBefore] = useState(0);
  const[mockingbird, setMockingbird] = useState(0);
  const[mile, setMile] =useState(0);

  const[revenue, setRevenue]=useState(0);

  useEffect(()=>{
    
    console.log("Books je: " + booksProducts);
     if(booksProducts==null){
       console.log("Odlazi po knjige!");
       axios.get("http://127.0.0.1:8000/api/books")
       .then((res)=>{
         console.log(res.data);
         setBook(res.data.data);
         console.log("res.data " + res.data);
         console.log("res.data.data " + res.data.data);
         console.log("Books: " + booksProducts);
         setProducts(res.data.data);
         
         
       })
       .catch((e)=>{console.log(e);},[booksProducts]);
     }
    
     if(token!=null && myBooks==null){
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

     
    //   var config1 = {
    //     method: 'get',
    //     maxBodyLength: Infinity,
    //     url: 'http://127.0.0.1:8000/api/genres',
    //     headers: { 
    //       'Authorization': `Bearer ${token}`, 
          
    //     },
    //   };
      
    //   axios(config1)
    //   .then(function (response) {
    //     console.log("Response zanrova je " + response.data.data);
    //     setGenres(response.data.data);
    //     console.log("GenresL: " + genres);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   },[genres]);
    //  }
    // console.log("App salje zanrove a to su: "+ genres);
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
          if(product.amount!=0){
            product.amount--;
          }
         
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
            setBook(booksProducts.filter((book) => book.price > 0));
            console.log("Price je: " + book1.price);
            
          }
        });

      })
      .catch(function (error) {
        console.log(error);
      });
    }
   
  }
   console.log("iz appa knjige su: "+booksProducts);

   //genres==[]  && user!=undefined
  useEffect(()=>{
    if(genres == null && user.email=="admin@gmail.com"){
      console.log("IDE PO GENROVE!");
      var config1 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/genres',
            headers: { 
              'Authorization': `Bearer ${token}`, 
              
            },
      };
          
      axios(config1).then(function (response) {
            console.log("Response zanrova je " + response.data.data);
            setGenres(response.data.data);

            console.log("GenresL: " + genres);
          })
          .catch(function (error) {
            console.log(error);
          },[genres]);
      }
        console.log("App salje zanrove a to su: ", genres);
    //   axios.get("http://127.0.0.1:8000/api/genres")
    //   .then((response)=>{
    //    console.log("Response zanrova je " + response.data.data);
    //    setGenres(response.data.data);
    //   })
    //   .catch((err)=>{
    //    console.log(err);
    //   });
    //  }
  });
   
  console.log("Iz glavnog zanrovi su: "+ genres);
  
//    function publishers(){
//     booksProducts.forEach((product) => {
//       if(product.publisher == "Vulkan")
//       setLaguna(laguna+1)
//       if(product.publisher == "Laguna")
//       setVulkan(vulkan+1)
//       if(product.publisher == "Lion")
//       setLion(lion+1)

//       setOther(other+1);
//     })
//    }

//    function pubLaguna(){
//     booksProducts.forEach((product) => {
//       if(product.publisher == "Laguna")
//       setLaguna(laguna+1)
//     })
//     return laguna;
//    }

//    function pubVulkan(){
//     booksProducts.forEach((product) => {
//       if(product.publisher == "Vulkan")
//       setVulkan(vulkan+1)
//     })
//     console.log(vulkan);
//     return vulkan;
//    }

//    function pubLion(){
//     booksProducts.forEach((product) => {
//       if(product.publisher == "Lion")
//       setLion(lion+1)
//     }
//     )
//     return lion;
//    }

//    function pubOther(){
//    booksProducts.forEach((product) => {
//     if(product.publisher !== "Lion" && product.publisher !== "Vulkan" && product.publisher !== "Laguna")
//     setOther(other+1)
//   }
//   )
//   return other;
// }

useEffect(() => {
  let brV=0;
  let brLa =0;
  let brLi=0;
  let brO=0;
  if(booksProducts!= null){
  booksProducts.forEach((product) => {
    if (product.publisher == "Vulkan") {
      brV =brV+1;
    }
    else if (product.publisher == "Laguna") {
      brLa =brLa+1;
    }
    else if (product.publisher == "Lion") {
      brLi =brLi+1;
    }
    else{
      brO =brO+1;
    }
  });
  setVulkan(brV);
  setLaguna(brLa);
  setLion(brLi);
  setOther(brO);
}
}, [booksProducts]);


useEffect(()=>{
  let price=0;
  let pp=0
  let bt=0;
  let hkm =0;
  let mby =0;
  let gm=0;
  cartProducts.forEach((product) => {
    price = price + product.price*product.amount;
    if(product.name =="Pride and Prejudice"){
      pp=pp+product.amount;
    }
    else if(product.name =="The Book Thief"){
      bt =bt+product.amount;
  }
    else if(product.name =="How to Kill a Mockingbird"){
      hkm =hkm+product.amount;
    }
    else if(product.name =="Me Before You"){
      mby = mby+product.amount;
    }
    else if(product.name =="The Green Mile"){
      gm =gm+product.amount;
    }
  })
  setRevenue(price);
  setPride(pp);
  setThief(bt);
  setMockingbird(hkm);
  setBefore(mby);
  setMile(gm);
},[cartProducts]);


  return (
    <div className="App">
      <BrowserRouter className="App">
      <NavBar  token = {token}  flag = {user===undefined? 1:user} setToken={setToken1}/>
      <Routes>
        <Route
          path="/"
          element={
            <Search 
            details = {booksProducts}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            deleteBook={deleteBook}
            user={user}
            updatePrice = {updatePrice}
            flag={0}/>
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
          path="/addBook"
          element={
            <Addbook genres = {genres}/>
          }
        />
       <Route
          path="/information"
          element={
            <Information items={images}/>
            
          }
        />
       <Route path='/converter' element={ <Converter />}></Route>
       <Route path='/statistics' element={ <Statistics  vulkan={vulkan} laguna={laguna} lion ={lion} other ={other} revenue={revenue} pride={pride} thief={thief} mockingbird = {mockingbird} before ={before} mile={mile}/>}></Route>
       <Route path='/randomQuote' element={ <Quote />}></Route>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
        
}

export default App;
