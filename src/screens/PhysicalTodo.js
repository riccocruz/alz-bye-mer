import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

import PercentageList from '../components/PercentageList';

export default class PhysicalTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }

  static navigationOptions = {
    title: 'Physical Todo',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
    
  };

render() {
    return (
        <ScrollView>
            <View style={styles.rowLayout}>
                <Text style={styles.titleText}> TO DO </Text>
                <Text style={styles.redBaseText}> 3
                <Text style={styles.titleText}> /3 completed </Text> </Text>
            </View>
            <View style={{
                borderBottomColor: '#000080',
                borderBottomWidth: 2,
                borderRadius:0.5,
            }}/>

            <PercentageList
                item = "Recommendation 1"
                percentage = "100"
            />
            <PercentageList
                item = "Recommendation 2"
                percentage = "100"
            />
            <PercentageList
                item = "Recommendation 3"
                percentage = "100"
            />
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
