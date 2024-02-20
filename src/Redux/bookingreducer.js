import { Booking, Delete } from "./actionTypes";

const initialState = {
    data:[]
}

const bookingReducer = (state = initialState,action)=>{
       switch(action.type){
        case Booking :
            const newData = [...state.data];
            newData.push(action.payload);
            return {data:newData}
         case Delete  :
            const filteredData = state.data.filter((item)=>item.id!== action.payload);
           
            return {data:filteredData}
        default:
           return state;
       }
};

export default bookingReducer;