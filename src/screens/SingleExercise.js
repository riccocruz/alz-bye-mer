// This is temporary as Ricco is already working on daily challenge.
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SingleExercise extends Component {
  static navigationOptions = {
    title: 'Cognitive Challenge',
  };

  constructor(props){
    super(props);
    this.state = {
      type: '',
      difficulty: '',
    }
  }

  componentWillMount() {
    let type = this.props.navigation.getParam('type');
    let difficulty = this.props.navigation.getParam('difficulty');
    if (type == undefined && difficulty == undefined) {
      type='dailyChallenge';
      difficulty='dynamic';
    }
    this.setState({
      type: type,
      difficulty: difficulty,
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>This is temporary screen as Ricco is already working on this page.</Text>
        <Text>This page is simply to test game type/difficulty param passed in</Text>
        <Text style={{color:'red'}}>Game Type: {this.state.type}</Text>
        <Text style={{color:'red'}}>Difficulty: {this.state.difficulty}</Text>
      </View>
    )
  }
}
