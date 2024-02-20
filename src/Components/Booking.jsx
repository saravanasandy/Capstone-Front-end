import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../Redux/actions";

const Booking = () => {
     
    const [bookingData, setBookingData] = useState({
       from:"",
       to:"",
       date:"",
       traveler:"",
       class:""
    });

    const data = useSelector((state)=>state.data);
    const dispatch = useDispatch();
    const size = data.length;

    const handleChange =(e)=>{
             console.log(e.target.value);
         setBookingData({...bookingData,[e.target.name]:e.target.value});
    }

    const handleBook = (e)=>{
        e.preventDefault();
       
        if (Object.keys(bookingData).length === 5){
            dispatch(makeBooking({...bookingData,id:size+1}))
        }else{
            alert("please select data correctly !");
        }

    }
    console.log(bookingData);
  return (
    <div className="md:mt-[160px] mt-[100px] mx-4 relative">
      <div className="bg-white routed-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row" onSubmit={handleBook}>
          {/* from */}
          <div className="py-1.5 px-4 flex-1 border-r-3">
            <p>From</p>
            <div className="flex flex-row">
              <select name="from" id="from" value={bookingData.name} onChange={handleChange} className="outline-none p-3 w-full bg-white" required >
                <option >Please select</option>
                <option >New York</option>
                <option >London</option>
                <option >Paris</option>
                <option >Rome</option>
              </select>
            </div>
          </div>

          {/* To */}
          <div className="py-1.5 px-4 flex-1 border-r-3">
            <p> To</p>
            <div className="flex flex-row">
              <select name="to" id="to" value={bookingData.name} onChange={handleChange} className="outline-none p-3 w-full bg-white" required>
                <option >Please select</option>
                <option >New York</option>
                <option >London</option>
                <option >Paris</option>
                <option >Rome</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="py-1.5 px-4 flex-1 border-r-3">
            <p>Departure Date</p>
            <input
              type="date"
              name="date"
              id="date"
              value={bookingData.name}
              onChange={handleChange}
              required
              className="outline-none p-3 w-full bg-slate-200"
            />
          </div>

          {/* Traveler */}
          <div className="py-1.5 px-4 flex-1 border-r-3">
            <p> Traveler</p>
            <div className="flex flex-row">
              <select name="traveler" id="traveler" value={bookingData.name} onChange={handleChange} className="outline-none p-3 w-full bg-white" required>
                <option>Please select</option>
                <option>1 Traveler</option>
                <option>2 Traveler</option>
                <option>3 Traveler</option>
                <option>4 Traveler</option>
                <option>5 Traveler</option>
              </select>
            </div>
          </div>

          {/* ClassMode */}
          <div className="py-1.5 px-4 flex-1 border-r-3">
            <p> Class</p>
            <div className="flex flex-row">
              <select name="class" id="class" value={bookingData.name} onChange={handleChange} className="outline-none p-3 w-full bg-white" required>
                <option>Please select</option>
                <option>Economy</option>
                <option>Business</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-8 py-2 space-x-2 text-center flex items-center justify-center"
            
          >
            <CiSquarePlus className="mr-2 text-3xl" />
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
