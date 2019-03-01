// This is temporary as Ricco is already working on daily challenge.
import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

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
      <ScrollView style={{flex:1}}>
      <View style={styles.title_container}>
        <MaterialCommunityIcons name="numeric" size={32} />
        <Text style={styles.title}> Alphanumeric Memory</Text>
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