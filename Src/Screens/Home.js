import React, { Component } from 'react';
import { View, Text ,Button } from 'react-native';
import style from '../Config/StyleSheet/Style';
import * as loginActions  from '../Actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onLoginPress = () => {

    console.log("on login press");

   // this.props.loginAction.loginFetchRequested('admin@mycms.com','devang_9978');
  }

  componentWillMount(){

       console.log("home called");

  }

  render() {
   
    return (
      <View style={style.containerStyle}>
          {/* <Text>{String(this.props.login.isLoading)}</Text> */}
        <Button title = "Home" onPress ={this.onLoginPress} />
      </View>
    );
  }
}


export default Home;
