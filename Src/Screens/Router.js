import React, { Component } from 'react';
import { View, Text } from 'react-native';
import First  from './First';
import Second  from './Second';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import AuthLoading from './AuthLoading';
import IconWithBadge from './IconWithBadge';
import HomeIconWithBadge from './HomeIconWithBadge';
import {createDrawerNavigator,createBottomTabNavigator, createAppContainer,SafeAreaView,DrawerItems, createStackNavigator, createSwitchNavigator, withNavigation} from 'react-navigation'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
 class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Router </Text>
      </View>
    );
  }
}

const LoginStack = createStackNavigator(
    {
        Login : Login,
        Signup : Signup
    }
);
const TabNavigator = createBottomTabNavigator(
    {
    
    
        Home: Home,
        First: First,
        Second: Second,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
              IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'First') {
              iconName = `ios-options`;
            }
    
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        },
      }
  );

  
  export default createAppContainer(createSwitchNavigator({

    AuthLoading : AuthLoading,

    LoginStack : LoginStack,
  
    TabNavigator : TabNavigator
  
  
  },{
  
    initialRouteName : 'AuthLoading'
  
  }
  
  ));
  