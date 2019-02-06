import React from 'react';
import { View } from 'react-native';
import Login from './pages/Login';

export default class App extends React.Component {

  render() {
    return (
      <View styles={{flex:1}}>
        <Login />
      </View>
    );
  }
}
