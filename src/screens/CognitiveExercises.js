import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

export default class CognitiveExercises extends Component {
  constructor(props) {
    super(props);
    this.state= {

    };
  }

  static navigationOptions = {
    title: 'Cognitive Exercises',
  };


  render() {
    const difficulty = [
      {name: 'Easy'},
      {name: 'Medium'},
      {name: 'Hard'}
    ];
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.title_container}>
          <MaterialCommunityIcons name="numeric" size={32} />
          <Text style={styles.title}> Alphanumeric Memory</Text>
        </View>
          {
            difficulty.map((item, index) => (
              <TouchableOpacity key={index} onPress={()=>navigate('SingleExercise', {type: 'Alphanumeric', difficulty: item.name, 
                                                                                    icon: "numeric"})}>
                <ListItem
                  title={item.name}
                  style={index==0? styles.list_item1 : styles.list_item}
                />
              </TouchableOpacity>
            ))
          }
          <View style={styles.title_container}>
            <MaterialCommunityIcons name="shape" size={32} />
            <Text style={styles.title}> Figure/Shape Memory</Text>
          </View>
            {
              difficulty.map((item, index) => (
                <TouchableOpacity key={index} onPress={()=>navigate('SingleExercise', {type: 'Figure/shape', difficulty: item.name,
                                                                                      icon: "shape"})}>
                  <ListItem
                    title={item.name}
                    style={index==0? styles.list_item1 : styles.list_item}
                  />
                </TouchableOpacity>
              ))
            }
            <View style={styles.title_container}>
              <MaterialCommunityIcons name="file-word-box" size={32} />
              <Text style={styles.title}> Words Recall</Text>
            </View>
              {
                difficulty.map((item, index) => (
                  <TouchableOpacity key={index} onPress={()=>navigate('SingleExercise', {type: 'Words', difficulty: item.name,
                                                                                        icon: "file-word-box"})}>
                    <ListItem
                      title={item.name}
                      style={index==0? styles.list_item1 : styles.list_item}
                    />
                  </TouchableOpacity>
                ))
              }
      </ScrollView>
    );
  }
};

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
  list_item1: {
    borderTopWidth: 1,
    borderBottomWidth:1,
    backgroundColor: 'green',
  },
  list_item: {
    borderBottomWidth: 1,
    backgroundColor: 'green',
  }
});
