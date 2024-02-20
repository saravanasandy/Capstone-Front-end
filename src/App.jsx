import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Portal from './Portal/Portal';



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<Portal/>}/>
      </Routes>
    </BrowserRouter>
   
   
    </>
  )
}

export default App
