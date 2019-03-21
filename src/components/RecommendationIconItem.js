import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RecommendationIconItem = ({ title, icon, navigate, }) => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={50} />
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 80,
    maxWidth: 80,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    
  }
});

export default RecommendationIconItem;
