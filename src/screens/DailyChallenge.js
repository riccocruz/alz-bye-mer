import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import HomeCard from '../components/HomeCard';

export default class DailyChallenge extends React.Component {
  
  static navigationOptions = {
    title: 'Cognitive Challenge',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      cognitiveChallengeCompleted: false,
    }
  }
  
  render() {
    return (
        <Text>Hello, {this.state.username}! this text is for debugging</Text>

    )
  }
}