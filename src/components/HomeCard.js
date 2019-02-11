import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CardItem from './CardItem';

const HomeCard = ({ title, item1, item2, item3, backgroundColor }) => {
  return (
    <View style={[styles.container, {backgroundColor: `${backgroundColor}`}]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardItemContainer}>
        <CardItem
          title={item1.title}
          image={item1.image}
          link={item1.link}
        />
        <CardItem
          title={item2.title}
          image={item2.image}
          link={item2.link}
        />
        <CardItem
          title={item3.title}
          image={item3.image}
          link={item3.link}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom: 8,
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

export default HomeCard;
