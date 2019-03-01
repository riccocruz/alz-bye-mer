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

render() {

    const {navigate} = this.props.navigation;

    return (
        <ScrollView>
            <View style={{backgroundColor: '#d3d3d3'}}>
                <Text style={styles.titleText}> Your Progress </Text>
            </View>
            <View style={styles.dividerStyle}/>

            <View style = {styles.rowLayout}>
                <ProgressIcon
                    item = "Cognitive"
                    onPress = 'CognitiveTodo'
                    image = {require('../../assets/img/brain_exercise.png')}
                    percentage = "25"
                    navigate = {navigate}
                />

                <ProgressIcon
                    item = "Physical"
                    onPress = 'PhysicalTodo'
                    image = {require('../../assets/img/walking.png')}
                    percentage = "100"
                    navigate = {navigate}
                />

            </View>

            {/* <View style={{margin: 10}}/> */}

            <View style={{backgroundColor: '#d3d3d3'}}>
                <Text style={styles.titleText}> Our Recommendations for 
                <Text style={{ fontWeight: '800' }}> {this.state.username}
                </Text>
                </Text>
            </View>
            <View style={styles.dividerStyle}/>
            
            <Text style={styles.subTitleText}> Cognitive Exercises </Text>

            <RecommendationCard
                item1={{title: 'Recommendation 1', image: require('../../assets/img/brain_exercise.png')}}
                item2={{title: 'Recommendation 2', image: require('../../assets/img/brain_exercise.png')}}
                username={this.state.username}
            />
            <RecommendationCard
                item1={{title: 'Recommendation 3', image: require('../../assets/img/brain_exercise.png')}}
                item2={{title: 'Recommendation 4', image: require('../../assets/img/brain_exercise.png')}}
                username={this.state.username}
            />
            
            <Text style={styles.subTitleText}> Physical Exercises </Text>

            <RecommendationCard
                item1={{title: 'Recommendation 1', image: require('../../assets/img/walking.png')}}
                item2={{title: 'Recommendation 2', image: require('../../assets/img/walking.png')}}
                username={this.state.username}
            />
            <RecommendationCard
                item1={{title: 'Recommendation 3', image: require('../../assets/img/walking.png')}}
                item2={{title: 'Recommendation 4', image: require('../../assets/img/walking.png')}}
                username={this.state.username}
            />
            
            
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
