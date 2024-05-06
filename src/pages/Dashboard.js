import React from 'react'
import {useSelector} from 'react-redux'

import FlightForm from '../Components/FlightForm'

const Dashboard = () => {

  


  const {user} = useSelector((state)=>state.auth)
  


  
  return (
    <>
    <section className='heading'>
     <h1 className='heading-content'>welcome  	&nbsp; {user && user.name}</h1>
     <p>Flight Booking App</p>
    </section>

   
    <FlightForm/>

    
    </>
  )
}

export default Dashboard