import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
<<<<<<< HEAD
=======
import goalReducer from '../features/goals/goalSlice';
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
import flightReducer from '../features/flights/flightSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
<<<<<<< HEAD
=======
    goals: goalReducer,
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
    flights: flightReducer
  },
});
