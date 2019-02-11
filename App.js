// This is a root where navigation setting takes place.

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Expo from 'expo';

// AWS Amplify
import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from 'aws-amplify-react-native';

// AWS config file
import AWSConfig from './aws-exports';

// import all screens for navigation here:
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';

// add screens to be navigated here:
const Navigation = createStackNavigator(
  {
    Login: { screen: Login },
    HomeScreen: { screen: HomeScreen},
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

// AWS config
Amplify.configure(AWSConfig);

// App Container
const AppContainer = createAppContainer(Navigation);
class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

// exporting App component with wrapped temporary authenticator
export default withAuthenticator(
  App,
  {
    includeGreetings: true,
    signUpConfig: {
      hiddenDefaults: ['phone_number']
    }
  }
);
