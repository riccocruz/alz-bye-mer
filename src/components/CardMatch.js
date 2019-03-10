import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ScoreBoard from '../commons/ScoreBoard';
// import CardMatchPlay from '../components/CardMatchPlay';
import CardMatchCard from '../components/CardMatchCard'

export default class CardMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRun: false,
    }; 
  }

  scoreBoard = (difficulty, score, stage) => {
    return (
      <View style={styles.scoreboard}>
        <View style={styles.row}>
          <Text>Difficulty: {difficulty}     </Text>
          <Text>Score: </Text>
          <Text style={styles.score_box}>{this.props.score}</Text>
        </View>
        <View style={styles.row}>
          <Text>Current Stage: </Text>
          <Text style={styles.stage_box}>{this.props.stage} / 3</Text>

        </View>
      </View>
    );
  }

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

  playGame = () => {
    if(this.state.isRun) {
      return(
        <CardMatchPlay
          difficulty={this.props.difficulty}/>
      );
    }
    return(
      <Text style = {styles.startText}> CLICK START TO PLAY! </Text>
    );
  }


  render() {
    return(
      <View>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          {this.scoreBoard(this.props.difficulty, this.props.score, this.props.stage)}
          {this.renderButton()}
        </View>
        
        <View style = {styles.gameboard}>
          {this.playGame()}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scoreboard: {
    width:'75%',
    flexDirection:'column',
    justifyContent:'space-around',
    paddingTop: 15,
    paddingBottom: 15,

  },
  row: {
    flexDirection:'row',
    paddingLeft:5,
    paddingRight:5,
  },
  score_box: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft:5,
    paddingRight:5,
    width: 25,
    textAlign: 'center'
  },
  stage_box: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft:5,
    paddingRight:5,
    textAlign: 'left'
  },

  gameboard: {
    borderWidth: 1,
    borderColor: 'black',
    height:500,
    width: '100%',
    marginBottom: 8,
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
  },

  startText: {
    fontSize: 20,
  },

});
