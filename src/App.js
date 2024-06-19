import React from'react'
import AppNavigator from './navigator/AppNavigator';

const App = () => {
    return (
        <AppNavigator />
    )
}

export default App

//import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import AppNavigator from './navigator/AppNavigator';
//import rootReducer from './reducers/laundryReducer';
//import { fetchAllLaundry } from './actions/laundryActions';
//
//const store = createStore(rootReducer, applyMiddleware(thunk));
//store.dispatch(fetchAllLaundry());
//
//const App = () => (
//  <Provider store={store}>
//    <NavigationContainer>
//      <AppNavigator />
//    </NavigationContainer>
//  </Provider>
//);
//
//export default App;


//// App.js
//
//import React from 'react';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import AppNavigator from './navigator/AppNavigator';
//import rootReducer from './reducers/laundryReducer';
//
//const store = createStore(rootReducer, applyMiddleware(thunk));
//
//const App = () => {
//  return (
//    <Provider store={store}>
//      <AppNavigator />
//    </Provider>
//  );
//};
//
//export default App;
