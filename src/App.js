import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<NavBar/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
