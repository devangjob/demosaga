import React, { Component } from 'react';
import { View, Text ,Button } from 'react-native';
import style from '../Config/StyleSheet/Style';
import * as loginActions  from '../Actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Header, Icon} from 'react-native-elements';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onLoginPress = () => {

    console.log("on login press");
    this.props.loginAction.newloginFetchRequested('admin@mycms.com','devang_9978');
    console.log("completed");
    console.log("updated" + this.props.login.isLoginSuccess);
  }

  componentDidMount(){

       console.log("home called");
      
  }
  componentDidUpdate(prevProps, prevState) {

    if (this.props.login.isLoginSuccess){

      this.props.navigation.navigate('TabNavigator');}
    
    }

  render() {
   
    return (
      <View style={style.containerStyle}>
       <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
         />
         <Text>{String(this.props.login.isLoginSuccess)}</Text>
        <Button title = "Login" onPress ={this.onLoginPress} />
      </View>
    );
  }
}

//post
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
