import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as loginActions  from '../Actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

   // this._bootstrapAsync();

  }

  componentDidMount() {

    console.log("component didmount called");

    if (this.props.login.isLoginSuccess){

      this.props.navigation.navigate('TabNavigator');
    
    }
    else
    {
      this.props.navigation.navigate('LoginStack');

    }
    
    }

  _bootstrapAsync = async () => {
    try {
        const userToken = await AsyncStorage.getItem('userToken');

        console.log("usertoken" + userToken);
       
        this.props.navigation.navigate(userToken ? 'TabNavigator' : 'LoginStack');

       // this.props.navigation.navigate(userToken ? 'Appdrawer' : 'Account');
      
    } catch(e) {
      // error reading value
    }
  
}

  render() {
   
        return (
            <View style={{flex:1, alignItems:'center', justifyContent :'center'}}>
           
            <View>
             <ActivityIndicator size="large" color="#9D1248" />
          </View>
        </View>
        );
 
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
      loginAction: bindActionCreators(loginActions, dispatch)
  }
};

//get
const mapStateToProps = (state) => {
  return {
    login : state.loginReducer,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);