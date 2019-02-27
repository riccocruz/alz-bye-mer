import React, { Component } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

// import SettingButton from '../components/SettingButton';

export default class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
        fontWeight: 'bold'
    };

    

  render() {
    const {navigate} = this.props.navigation;

    return(
        <View style={styles.MainContainer}>
        <TouchableOpacity 
            onPress={()=>navigate('ProfileSetting')}
            style = {styles.ButtonStyle}>
            <FontAwesome name = "user-circle" size = {35} styles={styles.icon} />
            < Text style ={styles.TextStyle}> Profile Setting </Text>

        </TouchableOpacity>

        <TouchableOpacity 
            onPress={()=>navigate('NotificationSetting')}
            style = {styles.ButtonStyle}>
            <FontAwesome name = "bell" size = {35} styles={styles.icon} />
            < Text style ={styles.TextStyle}> Notifications </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle}>
        <FontAwesome name = "lock" size = {35} styles={styles.icon} />
            < Text style ={styles.TextStyle}> Security </Text>

        </TouchableOpacity>
        <TouchableOpacity 
            onPress={ ()=>{ Linking.openURL('https://docs.google.com/document/d/1dxtVDFllG4sIjT98ozY0AtZ3eNlqx1uP0h7X_soyTXY/edit?usp=sharing')}}
            style = {styles.ButtonStyle}>
            <Image
                source={require('../../assets/img/about.png')}
                style={styles.ImageIconStyle}
            />
            {/* <View style={styles.SeparatorLine} /> */}
            < Text style ={styles.TextStyle}> About </Text>

        </TouchableOpacity>


        </View>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    ButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#ffff",
        borderWidth: 0.5,
        borderColor: "#a9a9a9",
        height: 60,
        width: "100%",
        borderRadius: 5,
        margin: 5,
    },

    ImageIconStyle: {
        padding: 10,
        paddingLeft: 20,
        margin: 5,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },

    TextStyle: {
        fontSize: 25,
        color: '#000',
        marginBottom: 4,
        marginRight: 20,
    },

    icon: {
        color:"white",
        padding: 10,
        paddingLeft: 20,
        margin: 5,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
      },

})