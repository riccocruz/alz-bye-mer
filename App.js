// This is a root where navigation setting and aws-amplify auth setup takes place.

// AWS Management Console account ID: 689668396068

import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';

// AWS Amplify
import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from 'aws-amplify-react-native';

// AWS config file
import AWSConfig from './aws-exports';

// import all screens for navigation here:
import Header from './src/commons/Header';
import HomeScreen from './src/screens/HomeScreen';
import UserProfile from './src/screens/UserProfile';
import UserAssessment from './src/screens/UserAssessment';
import Stepcount from './src/screens/Stepcount';
import CognitiveStat from './src/screens/CognitiveStat';
import PhysicalStat from './src/screens/PhysicalStat';
import Settings from './src/screens/Settings';
import ProfileSetting from './src/screens/ProfileSetting';
import NotificationSetting from './src/screens/NotificationSetting';
import CognitiveExercises from './src/screens/CognitiveExercises';
import CognitiveTodo from './src/screens/CognitiveTodo';
import PhysicalTodo from './src/screens/PhysicalTodo';
import Recommendation from './src/screens/Recommendation';
import SingleExercise from './src/screens/SingleExercise';

// add screens to be navigated here:
const Navigation = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen},
    UserProfile: { screen: UserProfile},
    UserAssessment: { screen: UserAssessment },
    Stepcount: { screen: Stepcount },
    CognitiveStat: { screen: CognitiveStat },
    PhysicalStat: { screen: PhysicalStat },
    Settings: {screen: Settings},
    ProfileSetting: { screen: ProfileSetting },
    NotificationSetting: { screen: NotificationSetting },
    CognitiveExercises: { screen: CognitiveExercises},
    CognitiveTodo: { screen: CognitiveTodo },
    PhysicalTodo: { screen: PhysicalTodo },
    Recommendation: { screen: Recommendation },
    SingleExercise: {screen: SingleExercise},
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerTitleStyle: {
        flex:1,
        textAlign:'center',
        marginRight: 56,
      },
      headerStyle: {
        height: 50,
      },
      headerForceInset: {
        vertical: 'never'
      }
    }
  }
);

// AWS config
Amplify.configure(AWSConfig);

// App Container
const AppContainer = createAppContainer(Navigation);
class App extends React.Component {
  // signOut to be passed down to Header
  handleSignOut = () => {
    Auth.signOut()
        .then(() => {
          this.props.onStateChange('signedOut', null);
          console.log(this.props.navigate);
        })
        .catch(err => {console.log(err)});
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Header handleSignOut={this.handleSignOut}/>
        <AppContainer />
      </SafeAreaView>
    )
  }
}

// exporting App component with wrapped temporary authenticator
export default withAuthenticator(
  App,
  {
    signUpConfig: {
      hiddenDefaults: ['phone_number']
    }
  }
);
