import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PercentageList = ({ item, percentage, color }) => {
    if(percentage=="100")
    return (
        <View style={styles.container}>
        <Text style={styles.completedText}>{item}</Text>
        <Text style={styles.completedText}> {percentage} % </Text>
        </View>
    )
    else
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item}</Text>
        <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold'}}> {percentage} % </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',
    },

    completedText: {
        color: "#c0c0c0",
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },

  

});

export default PercentageList;
