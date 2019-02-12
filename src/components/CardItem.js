import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardItem = ({ title, link, image }) => {
  return (
    <TouchableOpacity>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image
          style={styles.image}
          source={image}
          resizeMode={'contain'}
        />
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
  }
});

export default CardItem;
