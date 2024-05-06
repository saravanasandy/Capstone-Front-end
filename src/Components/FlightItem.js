import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFlight } from '../features/flights/flightSlice'
// import {FaRegCalendarMinus} from 'react-icons/fa'

const FlightItem = ({flight}) => {
    const dispatch = useDispatch()
    
    
    // console.log(Object.keys(flight));
    console.log(Object.values(flight));

  return (
    <>
    <div className='flight-details-list'>
        <div>
          <h4>Booking Time</h4>
        <div className='flight-items'>
            {new Date(flight.createdAt).toLocaleString('en-US')}
        </div>
        </div>
        
        
        {/* <h3>{flight._id}</h3> */}
        <div>
          <h4> From</h4>
        <h2 className='flight-items'>{flight.Destination_From}</h2>
        </div>
        
        <div>
        <h4> To </h4>
        <h2 className='flight-items'>{flight.Destination_To}</h2>
        </div>
        
        <div>
        <h4> Date </h4>
        <h2 className='flight-items'>{flight.Journey_Date}</h2>
        </div>
        <div>
        <h4> Persons </h4>
        <h2 className='flight-items'>{flight.Guests}</h2>
        </div>
        <div>
        <h4> ClassType </h4>
        <h2 className='flight-items'>{flight.ClassType}</h2>
        </div>
       
        
       
        <button className='close' onClick={()=>dispatch(deleteFlight(flight._id))}> X</button>
    </div>
    </>
  )
}

export default FlightItem