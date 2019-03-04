// This is temporary as Ricco is already working on daily challenge.
import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text } from 'react-native';
=======
import { TextInput, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
>>>>>>> 2e42832dff890b035cc5c5d96342ade4765709f3

export default class SingleExercise extends Component {
  static navigationOptions = {
    title: 'Cognitive Challenge',
  };

  constructor(props){
    super(props);
    this.state = {
      type: '',
      difficulty: '',
<<<<<<< HEAD
=======
      icon: '',
>>>>>>> 2e42832dff890b035cc5c5d96342ade4765709f3
    }
  }

  componentWillMount() {
    let type = this.props.navigation.getParam('type');
    let difficulty = this.props.navigation.getParam('difficulty');
<<<<<<< HEAD
    if (type == undefined && difficulty == undefined) {
      type='dailyChallenge';
      difficulty='dynamic';
=======
    let icon = this.props.navigation.getParam('icon');
    if (type == undefined && difficulty == undefined) {
      type='dailyChallenge';
      difficulty='dynamic';
      icon="shape";
>>>>>>> 2e42832dff890b035cc5c5d96342ade4765709f3
    }
    this.setState({
      type: type,
      difficulty: difficulty,
<<<<<<< HEAD
=======
      icon: icon,
>>>>>>> 2e42832dff890b035cc5c5d96342ade4765709f3
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
<<<<<<< HEAD
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>This is temporary screen as Ricco is already working on this page.</Text>
        <Text>This page is simply to test game type/difficulty param passed in</Text>
        <Text style={{color:'red'}}>Game Type: {this.state.type}</Text>
        <Text style={{color:'red'}}>Difficulty: {this.state.difficulty}</Text>
      </View>
    )
  }
}
=======
      <ScrollView style={{flex:1}}>
      <View style={styles.title_container}>
        <MaterialCommunityIcons name = {this.state.icon} size={32} />
        <Text style={styles.title}> {this.state.type}</Text>
        </View>
        <Text style={styles.titleText}> {this.state.type} - {this.state.difficulty}</Text>
        <Text style={styles.titleText}> Insert Exercise Below</Text>
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
>>>>>>> 2e42832dff890b035cc5c5d96342ade4765709f3
