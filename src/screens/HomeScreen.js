import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Header from "../components/Header";
import HomeCard from '../components/HomeCard';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 2537,
      distance: 1.12,
      dailyCompletd: false,
      cognitiveTodoCompleted: true,
      physicalTodoCompleted: false,
      risk: 'low',
      cognitiveChallengeCompleted: true,
      PhysicalChallengeCompleted: false,
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex:1}}>
        <Header navigate={navigate}/>
        <ScrollView style={{flex:1}}>
          <HomeCard
            title={"Cognitive Challenge"}
            item1={{title: 'View Stat', link: 'CognitiveStat', image: require('../../assets/img/bar_graph.png')}}
            item2={{title: 'Exercises', link: 'CognitiveExercise', image: require('../../assets/img/brain_exercise.png')}}
            item3={{title: 'Daily Challenge', link: 'DailyChallenge', image: this.state.dailyCompletd? require('../../assets/img/check_mark.png') : require('../../assets/img/exclamation.png')}}
            backgroundColor={this.state.cognitiveChallengeCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
          />
          <HomeCard
            title={"Physical Challenge"}
            item1={{title: 'View Stat', link: 'PhysicalStat', image: require('../../assets/img/bar_graph.png')}}
            item2={{title: `${this.state.step}/10000 steps`, link: 'StepCount', image: require('../../assets/img/walking.png')}}
            item3={{title: `${this.state.distance} Miles`, link: 'DistanceTraveled', image: require('../../assets/img/distance.png')}}
            backgroundColor={this.state.PhysicalChallengeCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
          />
          <HomeCard
            title={"My Profile"}
            item1={{title: 'Cognitive', link: 'CognitiveProfile', image: require('../../assets/img/check_mark.png')}}
            item2={{title: 'Physical', link: 'PhysicalProfile', image: require('../../assets/img/exclamation.png')}}
            item3={{title: 'Profile & Risk', link: 'RiskAssessment', image: require('../../assets/img/risk.jpg')}}
            backgroundColor={this.state.cognitiveTodoCompleted&&this.state.physicalTodoCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
          />
        </ScrollView>
      </View>
    )
  }
}
