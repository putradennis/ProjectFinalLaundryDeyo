// reducers/laundryReducer.js

import { ADD_LAUNDRY, DELETE_LAUNDRY, UPDATE_LAUNDRY, FETCH_LAUNDRY } from '../constants/actionTypes';

const initialState = {
  laundryList: []
};

const laundryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LAUNDRY:
      return {
        ...state,
        laundryList: [...state.laundryList, action.payload]
      };
    case DELETE_LAUNDRY:
      return {
        ...state,
        laundryList: state.laundryList.filter((laundry) => laundry.id !== action.payload)
      };
    case UPDATE_LAUNDRY:
      return {
        ...state,
        laundryList: state.laundryList.map((laundry) =>
          laundry.id === action.payload.id ? action.payload : laundry
        )
      };
    case FETCH_LAUNDRY:
      return {
        ...state,
        laundryList: action.payload
      };
    default:
      return state;
  }
};

export default laundryReducer;
