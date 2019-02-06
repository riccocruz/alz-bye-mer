import React from 'react';
import { View } from 'react-native';
import Login from './src/components/screens/Login';

export default class App extends React.Component {

  render() {
    return (
      <View styles={{flex:1}}>
        <Login />
      </View>
    );
  }
}
