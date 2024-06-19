const initialState = {
  laundries: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LAUNDRIES':
      return {
        ...state,
        laundries: action.payload,
      };
    case 'ADD_LAUNDRY':
      return {
        ...state,
        laundries: [...state.laundries, action.payload],
      };
    case 'UPDATE_LAUNDRY':
      return {
        ...state,
        laundries: state.laundries.map(laundry =>
          laundry.id === action.payload.id ? action.payload : laundry
        ),
      };
    case 'DELETE_LAUNDRY':
      return {
        ...state,
        laundries: state.laundries.filter(laundry => laundry.id !== action.payload),
      };
    default:
      return state;
  }
};
