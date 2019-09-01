import React, { Component } from 'react';
import { View, Text, Button,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { persistStore } from 'redux-persist';
import getStore from '../store';
const { store } = getStore(); 

export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView>
      <View>
        <Text> Logout and go to login screen </Text>
        <Button title = 'Logout' onPress={()=>{

          // let persistor = persistStore(store);

          //   persistor.purge() 
            
             AsyncStorage.clear();

             this.props.navigation.navigate('LoginStack');
        
        }} />

      </View>
      </SafeAreaView>
    );
  }
}
