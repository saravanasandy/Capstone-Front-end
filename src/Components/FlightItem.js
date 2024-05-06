import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFlight } from '../features/flights/flightSlice'

const FlightItem = ({flight}) => {
    const dispatch = useDispatch()
    
    
    // console.log(Object.keys(flight));
    console.log(Object.values(flight));

  return (
    <>
    <div className='goal'>
        <div>
            {new Date(flight.createdAt).toLocaleString('en-US')}
        </div>
        
        {/* <h3>{flight._id}</h3> */}
        <h2>{flight.Destination_From}</h2>
        <h2>{flight.Destination_To}</h2>
        <h2>{flight.Journey_Date}</h2>
        <h2>{flight.Guests}</h2>
        <h2>{flight.ClassType}</h2>
        <button className='close' onClick={()=>dispatch(deleteFlight(flight._id))}>X</button>
    </div>
    </>
  )
}

export default FlightItem