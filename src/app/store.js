import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import flightReducer from '../features/flights/flightSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    flights: flightReducer
  },
});
