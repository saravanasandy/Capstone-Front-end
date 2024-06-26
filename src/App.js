import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './Components/Header';

function App() {
  return (
    <>
     <BrowserRouter>
     <div className ='container'>
      <Header/>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
    </div>
     </BrowserRouter>
     <ToastContainer/>
    </>
    
  );
}

export default App;
