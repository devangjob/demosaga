import React, { Component } from 'react';
import { View, Text ,Button } from 'react-native';
import style from '../Config/StyleSheet/Style';



class First extends Component {
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

       console.log("First called");

  }

  componentDidMount(){

   // this.props.loginAction.loginFetchRequested('admin@mycms.com','devang_9978');

  }

  render() {
   
    return (
      <View style={style.containerStyle}>
          <Text>First</Text>
        <Button title = "Login" onPress ={()=>this.onLoginPress} />
      </View>
    );
  }
}



export default First;
