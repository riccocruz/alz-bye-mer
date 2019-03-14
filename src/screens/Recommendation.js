import React, { Component } from 'react';
import { Image, Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';

import ProgressIcon from '../components/ProgressIcon';
import RecommendationCard from '../components/RecommendationCard';

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }

  static navigationOptions = {
    title: 'Recommendation',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
    
  };

  componentDidMount() {
    // store username from loggedIn user info to retrieve user-specific data from database
    Auth.currentAuthenticatedUser()
        .then(user=>this.setState({username: user.username}))
        .catch(err=>console.log(err));
    }

renderRecommendationCard = (title1, title2, image1, image2, username) => {
    return( <RecommendationCard
        item1={title1}
        item2={title2}
        image1={image1}
        image2={image2}
        username={username}
    />);
}

renderProgressIcon = (item, onPress, image, percentage, navigate) => 
{
    return (
    <ProgressIcon
        item = {item}
        onPress = {onPress}
        image = {image}
        percentage = {percentage}
        navigate = {navigate}
    />);
}

render() {

    const {navigate} = this.props.navigation;

    return (
        <ScrollView>
            <View style={{backgroundColor: '#d3d3d3'}}>
                <Text style={styles.titleText}> Your Progress </Text>
            </View>
            <View style={styles.dividerStyle}/>

            <View style = {styles.rowLayout}>

                {this.renderProgressIcon("Cognitive", 'CognitiveTodo', require('../../assets/img/brain_exercise.png'), 25, navigate)}
                {this.renderProgressIcon("Physical", 'PhysicalTodo', require('../../assets/img/walking.png'), 100, navigate)}

            </View>

            <View style={{backgroundColor: '#d3d3d3'}}>
                <Text style={styles.titleText}> Our Recommendations for 
                <Text style={{ fontWeight: '800' }}> {this.state.username}
                </Text>
                </Text>
            </View>
            <View style={styles.dividerStyle}/>
            
            <Text style={styles.subTitleText}> Cognitive Exercises </Text>

            {this.renderRecommendationCard("Recommendation 1", "Recommentation 2", 
                require('../../assets/img/brain_exercise.png'), require('../../assets/img/brain_exercise.png'), this.state.username)}
            
            {this.renderRecommendationCard("Recommendation 3", "Recommentation 4", 
                require('../../assets/img/brain_exercise.png'), require('../../assets/img/brain_exercise.png'))}
            
            <Text style={styles.subTitleText}> Physical Exercises </Text>

            {this.renderRecommendationCard("Recommendation 1", "Recommentation 2", 
                require('../../assets/img/walking.png'), require('../../assets/img/walking.png'))}
            
            {this.renderRecommendationCard("Recommendation 3", "Recommentation 4", 
                require('../../assets/img/walking.png'), require('../../assets/img/walking.png'))}
            
            
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
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },

    baseText:{
        fontSize: 18
    },

    dividerStyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        borderRadius:0.5,
    },

    IconStyle: {
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        marginLeft: 10
    },

    subTitleText: {
        textDecorationLine: 'underline',
        margin:10,
        fontSize: 18,
        fontWeight: '500'
    }
});
