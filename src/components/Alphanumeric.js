import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ScoreBoard from '../commons/ScoreBoard';

export default class Alphanumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 1,
      isRun: false,
      time: 5,
    };
  };

  renderButton = () => {
    if(this.state.isRun) {
      return(
        <TouchableOpacity onPress={()=>this.setState(prevState=>({isRun: !prevState.isRun}))}>
          <Text style={styles.quit_btn}>Quit</Text>
        </TouchableOpacity>
      );
    }
    return(
      <TouchableOpacity onPress={()=>this.setState(prevState=>({isRun: !prevState.isRun}))}>
        <Text style={styles.start_btn}>Start</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <View style={styles.timer}>
          <MaterialIcons name="timer" size={32}/>
          <Text style={styles.timer_time}>{this.state.time}</Text>
        </View>
        <View style={styles.gameboard}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>19368</Text>
        </View>
        <ScoreBoard
          difficulty={this.props.difficulty}
          score={this.state.score}
          stage={this.state.stage}
        />
        {this.renderButton()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  timer: {
    position: 'absolute',
    right: 20,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  timer_time: {
    fontSize: 24,
    fontWeight:'bold',
  },
  gameboard: {
    height: 400,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  start_btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#33ff33',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  quit_btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#ff3333',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
