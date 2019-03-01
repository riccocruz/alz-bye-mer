import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RecommendationItem from '../components/RecommendationItem';

const RecommendationCard = ({ title, item1, item2, item3, backgroundColor, navigate, username }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardItemContainer}>
        <RecommendationItem
          title={item1.title}
          image={item1.image}
          username={username}
        />
        <RecommendationItem
          title={item2.title}
          image={item2.image}
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

export default RecommendationCard;
