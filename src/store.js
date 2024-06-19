import { createStore } from 'redux';
import laundryReducer from './reducers/laundryReducer';

const store = createStore(laundryReducer);

export default store;



//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'; // Import Redux Thunk middleware
//import rootReducer from './reducers/laundryReducer'; // Ganti dengan path yang benar ke file rootReducer Anda
//
//const store = createStore(
//  rootReducer,
//  applyMiddleware(thunk) // Terapkan middleware Redux Thunk
//);
//
//export default store;

//import { configureStore } from '@reduxjs/toolkit';
//import laundryReducer from './reducers/laundryReducer'; // Sesuaikan dengan nama reducer Anda
//
//const store = configureStore({
//  reducer: {
//    laundry: laundryReducer,
//    // tambahkan reducer lain di sini jika diperlukan
//  },
//});
//
//export default store;