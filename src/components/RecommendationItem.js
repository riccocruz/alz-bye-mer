import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecommendationItem = ({ title, image, navigate, }) => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={image}
          resizeMode={'contain'}
        />
        <Text style={styles.title}>{title}</Text>
    </View>
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

export default RecommendationItem;
