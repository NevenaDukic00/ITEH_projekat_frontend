import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const[token,setToken] = useState();

  function addToken(auth_token){
    setToken(auth_token);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Loginpage addToken={addToken}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<NavBar token = {token}/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
