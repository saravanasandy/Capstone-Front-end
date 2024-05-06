import React from 'react'
<<<<<<< HEAD
import {FaSignInAlt,FaSignOutAlt,FaUser,FaEarlybirds} from 'react-icons/fa'
import { Link , useNavigate} from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
=======
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link , useNavigate} from 'react-router-dom'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
import { logout,reset } from '../features/auth/authSlice'


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)

    const onLogout = ()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className='logo'>
<<<<<<< HEAD
            <Link to='/'> <FaEarlybirds className='logo-symbol'/></Link>
            <h4 className='logo-content'>SkyLine Flights</h4>
=======
            <Link to='/'>GoalSetter</Link>
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
        </div>
        <ul>
            {user ? (<>
                <li>
                    <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt/> Logout
                    </button>
              
          </li>
            </>) : (<>
              <li>
              <Link to='/login'>
                  <FaSignInAlt/> Login
              </Link>
          </li>
          <li>
              <Link to='/register'>
                  <FaUser/> Register
              </Link>
          </li>
             </>)}
          
        </ul>
    </header>
  )
}

export default Header