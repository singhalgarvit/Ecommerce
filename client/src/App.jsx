import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import { MyContext } from "./context";
import { useState } from 'react';
import Signup from './pages/Signup';


function App() {
  const [category,setCategory] = useState("Default");
  const [username,setUsername] = useState(localStorage.getItem("name"));
  const [jwtToken,setJwtToken] = useState(localStorage.getItem("token"));
  const [cart,setCart] = useState([]);
  return (
    <div className="App">
      <MyContext.Provider value={{ category,setCategory,username,setUsername,jwtToken,setJwtToken,cart, setCart }}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/*' element={<Navigate to="/"/>}/>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
