import { createStore, combineReducers } from 'redux';
import { reducer as laundryReducer } from '../reducers/laundry';

const rootReducer = combineReducers({
  laundry: laundryReducer,
});

const store = createStore(rootReducer);

export default store;
