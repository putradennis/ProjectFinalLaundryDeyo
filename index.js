/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/AppAkhir';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//import React from 'react';
//import { AppRegistry } from 'react-native';
//import { Provider } from 'react-redux';
//import App from './src/App';
//import store from './src/store';
//
//const Main = () => (
//  <Provider store={store}>
//    <App />
//  </Provider>
//);
//
//AppRegistry.registerComponent('TugasFinalProject', () => Main);

//import {AppRegistry} from 'react-native';
//import App from './src/App';
////import {name as appName} from './app.json';
//
////import {Provider} from 'react-redux';
////import {store} from './src/store';
////
////const Container = () => {
////    return (
////        <Provider store = { store }>
////            <App />
////        </Provider>
////    )
////}
//
////AppRegistry.registerComponent(appName, () => Container);
//
//AppRegistry.registerComponent('TugasFinalProject', () => App);
