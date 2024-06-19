import { ADD_LAUNDRY, DELETE_LAUNDRY, UPDATE_LAUNDRY, FETCH_LAUNDRY } from '../constants/actionTypes';

// Action creator untuk menambahkan laundry
export const addLaundry = (laundry) => ({
  type: ADD_LAUNDRY,
  payload: laundry
});

// Action creator untuk menghapus laundry
export const deleteLaundry = (id) => ({
  type: DELETE_LAUNDRY,
  payload: id
});

// Action creator untuk memperbarui laundry
export const updateLaundry = (laundry) => ({
  type: UPDATE_LAUNDRY,
  payload: laundry
});

// Action creator untuk mengambil laundry
export const fetchLaundry = (laundryList) => ({
  type: FETCH_LAUNDRY,
  payload: laundryList
});
