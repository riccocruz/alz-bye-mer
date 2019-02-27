import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default class CognitiveExercises extends Component {
  constructor(props) {
    super(props);
    this.state= {

    };
  }

  static navigationOptions = {
    title: 'Cognitive Exercises',
  };

  render() {
    return (
      <ScrollView style={{flex:1}}>
        <Text>Cognitive Exercises Screen</Text>
      </ScrollView>
    );
  }
};
