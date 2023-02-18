import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
      <Loginpage></Loginpage>
    </div>
  );
}

export default App;
