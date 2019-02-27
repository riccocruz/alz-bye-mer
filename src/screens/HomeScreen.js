import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Auth } from 'aws-amplify';

import HomeCard from '../components/HomeCard';
import { Button } from 'react-native-elements';

import { Pedometer } from 'expo';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pastStepCount: null,
      currentStepCount: null,
      isPedometerAvailable: "checking",
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
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getPastStepCount() {
    return this.pastStepCount;
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  reloadStep = () => {
    setInterval(() => {
      this._unsubscribe();
      this._subscribe();
    }, 10000);
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
            item2={{title: `${this.state.pastStepCount}/10000 steps`, onPress: 'StepCount', image: require('../../assets/img/walking.png')}}
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

          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            onPress={ ()=>{ Linking.openURL('https://www.nia.nih.gov/health/what-alzheimers-disease')}}
          >
            <Text style={styles.textStyle}>
              About Alzheimer's Disease </Text>
          </TouchableOpacity>

          <Button
            onPress={ ()=>{ Linking.openURL('https://www.nia.nih.gov/health/what-alzheimers-disease')}}
            title="About Alzheimer's Disease"
            containerStyle={{color:"#ffa07a", width:'95%', paddingLeft: 20, marginTop: 10, shadowColor: '#000',
            shadowOffset: {width:2, height:4},
            shadowOpacity: 0.75,
            shadowRadius: 3}}
          />

          <Button 
            onPress={ ()=> navigate('Settings', {username: this.state.username})}
            title="Settings"
            color ="#ffa07a"
            containerStyle={{width:'50%', paddingLeft: 20, marginTop: 10}}
          />

          <Button 
            onPress={ ()=> navigate('Todo_Rec', {username: this.state.username})}
            title="Todo/Rec"
            color ="#ffa07a"
            containerStyle={{width:'50%', paddingLeft: 20, marginTop: 10}}
          />

        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffa07a',
    width:'95%',
    height: 50, 
    paddingLeft: 20, 
    marginTop: 10, 
    shadowColor: '#000',
    shadowOffset: {width:2, height:4},
    shadowOpacity: 0.75,
    shadowRadius: 3
  },

  textStyle: {
    fontSize: 30,
    color: '#ffffff'
  }

})