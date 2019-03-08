// This is temporary as Ricco is already working on daily challenge.
import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

import Alphanumeric from '../components/Alphanumeric';

export default class SingleExercise extends Component {
  static navigationOptions = {
    title: 'Cognitive Challenge',
  };

  constructor(props){
    super(props);
    this.state = {
      type: '',
      difficulty: '',
      icon: '',
    }
  }

  componentWillMount() {
    let type = this.props.navigation.getParam('type');
    let difficulty = this.props.navigation.getParam('difficulty');
    let icon = this.props.navigation.getParam('icon');
    if (type == undefined && difficulty == undefined) {
      type='dailyChallenge';
      difficulty='dynamic';
      icon="shape";
    }
    this.setState({
      type: type,
      difficulty: difficulty,
      icon: icon,
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  // Type: dailyChallenge, Alphanumeric, Figure/shape, Words
  // Difficulty: Easy, Medium, Hard
  renderGame = (type, difficulty) => {
    switch(type) {
      case "Alphanumeric":
        return (
          <Alphanumeric difficulty={difficulty}/>
        );
        break;
      case "Figure/shape":
        return (
          <View>
            <Text>Figure/Shape - {difficulty}</Text>
          </View>
        );
        break;
      case "Words":
        return (
          <View>
            <Text>Words Recall - {difficulty}</Text>
          </View>
        );
        break;
      case "dailyChallenge":
        return (
          <View>
            <Text>Daily Challenge</Text>
          </View>
        );
        break;
    }
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.title_container}>
          <MaterialCommunityIcons name = {this.state.icon} size={32} />
          <Text style={styles.title}> {this.state.type}</Text>
        </View>
        {this.renderGame(this.state.type, this.state.difficulty)}
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  title_container: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    paddingTop: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#000080"

  },
});
