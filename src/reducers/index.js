// reducers/index.js

import { combineReducers } from 'redux';
import laundryReducer from './laundryReducer'; // Ganti dengan nama reducer Anda

const rootReducer = combineReducers({
  laundry: laundryReducer, // Sesuaikan dengan nama reducer dan state Anda
  // tambahkan reducer lain jika ada
});

export default rootReducer;
