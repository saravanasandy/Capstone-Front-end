import React from 'react';
import logo from "../assets/Logo.png";
import { RiFlightTakeoffLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className='w-full px-4 py-4 bg-slate-100'>
        <nav className='flex items-center justify-between max-w-6xl mx-auto'>
               
            <a href="/" className='text-lg font-bold flex items-center'>
            <RiFlightTakeoffLine  className='text-2xl mr-1 text-indigo-600'/>
                Travel Comfort
            </a>
            <button type='button' className='bg-indigo-600 text-white px-6 py-2 rounded font-medium'>Menu</button>
        </nav>
    </header>
  )
}

export default Header