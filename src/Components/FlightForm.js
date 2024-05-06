import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { FaCartPlus} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {createFlight, getFlights, reset} from '../features/flights/flightSlice'
import FlightItem from './FlightItem';
import Spinner from './Spinner';
=======
import {FaAd,FaDAndD,FaBookmark,FaBold, FaCartPlus} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {createFlight, getFlights, reset} from '../features/flights/flightSlice'
import FlightItem from './FlightItem';
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1

const FlightForm = () => {
  const [bookingData, setBookingData] = useState({
    Destination_From:"",
    Destination_To :"",
    Journey_Date:"",
    Guests:"",
    ClassType:"",
  });

  const dispatch = useDispatch()
  

   const {Destination_From, Destination_To , Journey_Date, Guests, ClassType} = bookingData;
   const {flights,isLoading, isError, message} = useSelector((state)=>state.flights)
   const {user} = useSelector((state)=>state.auth)
  
   useEffect(() => {
     
    if (isError) {
     console.log(message);
    }

   dispatch(getFlights())

   return ()=>{
     dispatch(reset())
   }

 }, [user, isError, message,dispatch])

<<<<<<< HEAD
 if (isLoading) {
  return <Spinner/>
}
=======
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
  
    const onChange = (e)=>{
      setBookingData((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value,
      }))
    }

    const onSubmit = (e)=>{
      e.preventDefault();
      const bookingDetails = {
        Destination_From,
        Destination_To,
        Journey_Date,
        Guests,
        ClassType,
      }
      console.log(bookingDetails);
      dispatch(createFlight(bookingDetails))


    }

  return (
    <>
    <div className='container-form'>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <p>Destination From</p>
          <div>
            <select className='select-option from-select' name='Destination_From' id='Destination_From' value={Destination_From} onChange={onChange} required>
              <option value='' hidden className='option'>Please Select</option>
              <option className='option'>New York</option>
              <option className='option'>London</option>
              <option className='option'>France</option>
              <option className='option'>Germany</option>
              <option className='option'>India</option>
<<<<<<< HEAD
              <option className='option'>Brazil</option>
              <option className='option'>Malaysia</option>
              <option className='option'>Sri Lanka</option>
              <option className='option'>Kuwait</option>
              <option className='option'>Austria</option>
              <option className='option'>Mexico</option>
              <option className='option'>Uzbekistan</option>
              <option className='option'>Poland</option>
              <option className='option'>Switzerland</option>
=======
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
            </select>
          </div>
        </div>

        <div>
          <p>Destination To</p>
          <div>
            <select className='select-option to-select' name='Destination_To' id='Destination_To' value={Destination_To} onChange={onChange} required>
              <option value="" hidden>Please select</option>
              <option> Pakistan</option>
              <option> Bangladesh</option>
              <option> Qatar</option>
              <option> Australia</option>
              <option> Italy</option>
<<<<<<< HEAD
              <option> Turkey</option>
              <option> Iran</option>
              <option> Zimbabwe</option>
              <option> Sweden</option>
              <option> India</option>
              <option> Canada</option>
              <option> Colombia</option>
              <option> China</option>
=======
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
            </select>
          </div>
        </div>

        <div>
          <p>Journey Date</p>
          <input type='date' className='select-option' name='Journey_Date' id='Journey_Date' value={Journey_Date} onChange={onChange} required />
        </div>

        <div>
          <p>Guests</p>
          <div>
            <select className='select-option' name='Guests' id='Guests' value={Guests} onChange={onChange} required>
              <option value="" hidden> Please select</option>
              <option value="1"> 1 Person </option>
              <option value="2"> 2 Person </option>
              <option value="3"> 3 Person </option>
              <option value="4"> 4 Person </option>
            </select>
          </div>
        </div>

        <div>
          <p>Class Type</p>
          <div>
            <select className='select-option' name='ClassType' id='ClassType' value={ClassType} onChange={onChange} required>
              <option value="" hidden> Please Select</option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>
        </div>

        <button className='select-option book'> 
         
          <FaCartPlus/>
         Booking </button>
      </form>
    </div>


    <section className='content'>
      {flights.length > 0 ? 
      (<>
         <div className='goals'>
           {flights.map((flight)=>{
            return <FlightItem key = {flight._id} flight = {flight}/>
           })}   
         </div>
      </> ) 
      :
       (<>
          <h3> you have not create any flight Booking</h3>
       </>)}
    </section>
    </>
  )
}

export default FlightForm