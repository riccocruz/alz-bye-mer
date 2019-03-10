import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';

class CardMatchCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  clickMe(){
    //call parent function that manages state
    if(this.props.position === 'unselected'){
      this.props.clickEvent(this.props.index);
    }else{
      console.log('cant click me! my position is '+this.props.position);
    }
  }
  
  render(){
    return(
      <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>AB</Text></TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>
      </CardFlip>
    );
  }
};

const styles = StyleSeet.create({
  cardContainer:{

  },
});