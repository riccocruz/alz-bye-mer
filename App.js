// This is a root where navigation setting takes place.

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Expo from 'expo';

// import all screens for navigation here:
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';

// add screens to be navigated here:
const Navigation = createStackNavigator({
  Login: { screen: Login },
  HomeScreen: { screen: HomeScreen},
});

export default createAppContainer(Navigation);
