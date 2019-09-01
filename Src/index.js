import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Router from './Screens/Router';
import { PersistGate } from "redux-persist/es/integration/react";
import getStore from './store';
import { Provider } from 'react-redux';



const { store, persistor } = getStore(); 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <Router />
        </PersistGate>
     </Provider>
    );
  }
}
