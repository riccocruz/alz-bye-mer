import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Auth } from 'aws-amplify';

export default class ProfileSetting extends Component {
    static navigationOptions = {
        title: 'Profile Setting',
        fontWeight: 'bold'
    };

    constructor(props)
    {
        super(props);
        this.state ={
            username: "",
        }
    }

    componentDidMount() {
        // store username from loggedIn user info to retrieve user-specific data from database
        Auth.currentAuthenticatedUser()
            .then(user=>this.setState({username: user.username}))
            .catch(err=>console.log(err));
    }

    render() {
        return (
        <View style={styles.container} >
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyle}> User ID </Text>
                <Text style={styles.ProfileTextStyle}> {this.state.username} </Text>
            </View>
            <View style = {styles.Separator} />
            <View style = {styles.ViewStyle}>
                <Text style={styles.TextStyle}> User Picture </Text>

            </View>
            <View style={styles.Separator} />
            <View style = {styles.ViewStyle}>
                <Text style={styles.TextStyle}> Age </Text>
            </View>
            <View style={styles.Separator} />
            <View style = {styles.ViewStyle}>
                <Text style={styles.TextStyle}> Password </Text>
            </View>
        </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginBottom: 10,
    },

    ViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 

    TextStyle: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18, 
        // color: '#0000'
    },

    ProfileTextStyle: {
        // fontWeight:'normal',
        margin: 10,
        fontSize: 18,
        alignItems: 'flex-end',
        // justifyContent: 'right'
    },

    Separator: {
        width: "100%",
        height: 4,
        color: '#afafaf'
        
    },
})