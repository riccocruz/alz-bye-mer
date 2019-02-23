import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Auth } from 'aws-amplify';

import HomeCard from '../components/HomeCard';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    title: 'Home',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
    
  };

  componentDidMount() {
    // store username from loggedIn user info to retrieve user-specific data from database
    Auth.currentAuthenticatedUser()
        .then(user=>this.setState({username: user.username}))
        .catch(err=>console.log(err));
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
        <ScrollView style={{flex:1}}>
          <Text>Hello, {this.state.username}! this text is for debugging</Text>
          <HomeCard
            title={"Cognitive Challenge"}
            item1={{title: 'View Stat', onPress: 'CognitiveStat', image: require('../../assets/img/bar_graph.png')}}
            item2={{title: 'Exercises', onPress: 'CognitiveExercise', image: require('../../assets/img/brain_exercise.png')}}
            item3={{title: 'Daily Challenge', onPress: 'DailyChallenge', image: this.state.dailyCompletd? require('../../assets/img/check_mark.png') : require('../../assets/img/exclamation.png')}}
            backgroundColor={this.state.cognitiveChallengeCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
            navigate={navigate}
            username={this.state.username}
          />
          <HomeCard
            title={"Physical Challenge"}
            item1={{title: 'View Stat', onPress: 'PhysicalStat', image: require('../../assets/img/bar_graph.png')}}
            item2={{title: `${this.state.step}/10000 steps`, onPress: 'StepCount', image: require('../../assets/img/walking.png')}}
            item3={{title: `${this.state.distance} Miles`, onPress: 'DistanceTraveled', image: require('../../assets/img/distance.png')}}
            backgroundColor={this.state.PhysicalChallengeCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
            navigate={navigate}
            username={this.state.username}
          />
          <HomeCard
            title={"My Profile"}
            item1={{title: 'Cognitive', onPress: 'CognitiveProfile', image: require('../../assets/img/check_mark.png')}}
            item2={{title: 'Physical', onPress: 'PhysicalProfile', image: require('../../assets/img/exclamation.png')}}
            item3={{title: 'Profile & Risk', onPress: 'UserProfile', image: require('../../assets/img/risk.jpg')}}
            backgroundColor={this.state.cognitiveTodoCompleted&&this.state.physicalTodoCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
            navigate={navigate}
            username={this.state.username}
          />

          <Button
            onPress={ ()=>{ Linking.openURL('https://www.nia.nih.gov/health/what-alzheimers-disease')}}
            title="About AD"
            color ="#ffa07a"
            containerStyle={{width:'50%', paddingLeft: 20, marginTop: 10}}
          />

        </ScrollView>
    )
  }
}
