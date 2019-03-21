import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

import PercentageList from '../components/PercentageList';

export default class PhysicalTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        completed: 1,
        numRecommendation: 2
    }
    
  }

  static navigationOptions = {
    title: 'Physical Todo',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
    
  };

  renderPercentageList = (item, percentage) => {
      return (
        <PercentageList
            item = {item}
            percentage = {percentage}
        />
      );
  }


    render() {
    return (
        <ScrollView>
            <View style={styles.rowLayout}>
                <Text style={styles.titleText}> TO DO </Text>
                <Text style={styles.redBaseText}> {this.state.completed}
                <Text style={styles.titleText}> / {this.state.numRecommendation} completed </Text> </Text>
            </View>
            <View style={{
                borderBottomColor: '#000080',
                borderBottomWidth: 2,
                borderRadius:0.5,
            }}/>

            {this.renderPercentageList("Walk (10,000 steps) ", 100)}
            {this.renderPercentageList("Yoga", 100)}

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    rowLayout: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',

    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000080"

    },

    redBaseText:{
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    },

    baseText:{
        fontSize: 18
    }
});
