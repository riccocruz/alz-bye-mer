import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Header from "../components/Header";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex:1}}>
        <Header/>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Text> This is HOMESCREEN </Text>
          <TouchableOpacity onPress={()=>navigate('Login')}><Text>Click Here to Go Back</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
