import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../Redux/actions";


const Table = () => {
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();
  console.log(data);

  const handleDelete = (e)=>{
    console.log(e.currentTarget.id);
    const id = parseInt(e.currentTarget.id);
    dispatch(deleteBooking(id));
  }
  return (
    <div>
      {data.length && (
        <div className="max-w-6xl mx-auto mt-5 bg-white">
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>From</th>
        <th>To</th>
        <th>Date</th>
        <th>Traveler</th>
        <th>Class</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item,index)=>(
            <tr key={index}>
            <th>{item.from}</th>
            <td>{item.to}</td>
            <td>{item.date}</td>
            <td>{item.traveler}</td>
            <td>{item.class}</td>
            <td><button className="btn-xs bg-red-400 text-white px-4 py-2" id={`${item.id}`} onClick={(e)=>handleDelete(e)}><MdDelete /></button></td>
          </tr>
      ))}
      
    
    </tbody>
  </table>
</div>
        </div>
      )}
    </div>
  );
};

export default Table;
