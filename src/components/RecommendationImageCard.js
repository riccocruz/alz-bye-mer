import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RecommendationImageItem from './RecommendationImageItem';

const RecommendationImageCard = ({ item1, item2, image1, image2, backgroundColor, navigate, username }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardItemContainer}>
        <RecommendationImageItem
          title={item1}
          image={image1}
          username={username}
        />
        <RecommendationImageItem
          title={item2}
          image={image2}
          username={username}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 10,
    // marginRight: 10,
    marginTop: 10,
    marginBottom: 4,
    // paddingLeft: 5,
    // paddingRight: 5,
    paddingTop: 8,
    paddingBottom: 8,
    // borderRadius: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 12
  },
  cardItemContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
  }
});

export default RecommendationImageCard;
