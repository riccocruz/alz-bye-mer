import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreBoard = ({difficulty, score, stage, totalStage}) => {
  return (
    <View style={styles.scoreboard}>
      <Text>Difficulty: {difficulty}</Text>
      <View style={styles.row}>
        <Text>Score: </Text>
        <Text style={styles.score_box}>{score}</Text>
      </View>
      <View style={styles.row}>
        <Text>Current Stage: </Text>
        <Text style={styles.stage_box}>{stage} / {totalStage}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  scoreboard: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop: 15,
    paddingBottom: 15,
  },
  row: {
    flexDirection:'row'
  },
  score_box: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft:3,
    paddingRight:5,
    width: 35,
    textAlign: 'center'
  },
  stage_box: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft:5,
    paddingRight:5,
    width: 60,
    textAlign: 'center'
  }
});

export default ScoreBoard;
