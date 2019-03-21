import React, { Component } from 'react';
import { Image, Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';

import ProgressIcon from '../components/ProgressIcon';
import RecommendationImageCard from '../components/RecommendationImageCard';
import RecommendationIconCard from '../components/RecommendationIconCard';

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

renderRecommendationImageCard = (title1, title2, image1, image2, username) => {
    return( <RecommendationImageCard
        item1={title1}
        item2={title2}
        image1={image1}
        image2={image2}
        username={username}
    />);
}

renderRecommendationIconCard = (title1, title2, icon1, icon2, username) => {
    return( <RecommendationIconCard
        item1={title1}
        item2={title2}
        icon1={icon1}
        icon2={icon2}
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

            {this.renderRecommendationIconCard("Alphanumeric Memory \n(Medium)", "Image Memory (Hard)", 
                "numeric", "shape", this.state.username)}
            
            {this.renderRecommendationIconCard("Color Match (Medium)", "Read News", 
                "eyedropper-variant", "book-open-variant")}
            
            <Text style={styles.subTitleText}> Physical Exercises </Text>

            {this.renderRecommendationImageCard("Walk (10,000 steps)", "Yoga", 
                require('../../assets/img/walking.png'), require('../../assets/img/yoga.png'))}
            
            
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
