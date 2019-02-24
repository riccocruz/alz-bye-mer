import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CardItem from '../components/CardItem';

const HomeCard = ({ title, item1, item2, item3, backgroundColor, navigate, username }) => {
  return (
    <View style={[styles.container, {backgroundColor: `${backgroundColor}`}]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardItemContainer}>
        <CardItem
          title={item1.title}
          image={item1.image}
          onPress={item1.onPress}
          navigate={navigate}
          username={username}
        />
        <CardItem
          title={item2.title}
          image={item2.image}
          onPress={item2.onPress}
          navigate={navigate}
          username={username}
        />
        <CardItem
          title={item3.title}
          image={item3.image}
          onPress={item3.onPress}
          navigate={navigate}
          username={username}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width:2, height:4},
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 2
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
