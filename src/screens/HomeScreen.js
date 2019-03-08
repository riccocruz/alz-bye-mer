import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking, Button } from 'react-native';
import { Auth } from 'aws-amplify';

import HomeCard from '../components/HomeCard';

import { Pedometer } from 'expo';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pastStepCount: null,
      currentStepCount: 0,
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

  componentWillMount() {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 3);
    end.setDate(end.getDate() - 2);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ currentStepCount: result.steps });
      },
      error => {
        this.setState({
          currentStepCount: "Could not get stepCount: " + error
        });
      }
    );
  }

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
      console.log(result);
      console.log(this.state.pastStepCount);
      this.setState({
        currentStepCount: this.state.pastStepCount + result.steps
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

  render() {
    const {navigate} = this.props.navigation;

    return (
        <ScrollView style={{flex:1}}>
          <HomeCard
            title={"Cognitive Challenge"}
            item1={{title: 'View Stat', onPress: 'CognitiveStat', image: require('../../assets/img/bar_graph.png')}}
            item2={{title: 'Exercises', onPress: 'CognitiveExercises', image: require('../../assets/img/brain_exercise.png')}}
            item3={{title: 'Daily Challenge', onPress: 'SingleExercise', image: this.state.dailyCompletd? require('../../assets/img/check_mark.png') : require('../../assets/img/exclamation.png')}}
            backgroundColor={this.state.cognitiveChallengeCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
            navigate={navigate}
            username={this.state.username}
          />
          <HomeCard
            title={"Physical Challenge"}
            item1={{title: 'View Stat', onPress: 'PhysicalStat', image: require('../../assets/img/bar_graph.png')}}
            item2={{title: `${this.state.currentStepCount}/10000 steps`, onPress: '', image: require('../../assets/img/walking.png')}}
            item3={{title: `${this.state.distance} Miles`, onPress: 'DistanceTraveled', image: require('../../assets/img/distance.png')}}
            backgroundColor={this.state.PhysicalChallengeCompleted? 'rgba(123, 239, 178, 0.75)' : 'rgba(247, 202, 24, 0.5)'}
            navigate={navigate}
            username={this.state.username}
          />
          <HomeCard
            title={"My Profile"}
            item1={{title: 'Cognitive', onPress: 'CognitiveTodo', image: require('../../assets/img/check_mark.png')}}
            item2={{title: 'Physical', onPress: 'PhysicalTodo', image: require('../../assets/img/exclamation.png')}}
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
            <Text style={styles.buttonTextStyle}>
              About Alzheimer's Disease </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ ()=> navigate('Settings', {username: this.state.username})}
          >
          <Text style = { styles.textStyle }> Settings </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ ()=> navigate('Recommendation', {username: this.state.username})}
          >
          <Text style = { styles.textStyle }> Recommendation </Text>
          </TouchableOpacity>
        </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ff6347',
    width:'90%',
    height: 40,
    marginLeft: '5%',
    marginTop: 10,
    opacity: 0.75,
    shadowColor: '#000',
    shadowOffset: {width:2, height:4},
    shadowOpacity: 0.75,
    shadowRadius: 3
  },
  buttonTextStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 25,
    color: '#ffffff'
  },
  textStyle: {
    color: 	"#4169E1",
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
  }
})