import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Books from './components/Books';

function App() {
  const[token,setToken] = useState();

  function addToken(auth_token){
    setToken(auth_token);
  }
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<NavBar token = {token}/>}>
        <Route path='books' element = {<Books/>}></Route>
        <Route path='login' element={<Loginpage addToken={addToken}/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter> */}
     
      <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Books
            />
          }
        />
        <Route
          path="/cart"
        />
        <Route path='login' element={<Loginpage addToken={addToken}/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
