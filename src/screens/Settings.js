import React, { Component } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
            style = {styles.ButtonStyle} activeOpacity={0.5}>
            <Image
                source={require('../../assets/img/defaultProfile.png')}
                style={styles.ImageIconStyle}
            />
            {/* <View style={styles.SeparatorLine} /> */}
            < Text style ={styles.TextStyle}> Profile Setting </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle} activeOpacity={0.5}>
            <Image
                source={require('../../assets/img/reminder.png')}
                style={styles.ImageIconStyle}
            />
            {/* <View style={styles.SeparatorLine} /> */}
            < Text style ={styles.TextStyle}> Reminder </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle} activeOpacity={0.5}>
            <Image
                source={require('../../assets/img/notification.jpg')}
                style={styles.ImageIconStyle}
            />
            {/* <View style={styles.SeparatorLine} /> */}
            < Text style ={styles.TextStyle}> Notifications </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle} activeOpacity={0.5}>
            <Image
                source={require('../../assets/img/lock.png')}
                style={styles.ImageIconStyle}
            />
            {/* <View style={styles.SeparatorLine} /> */}
            < Text style ={styles.TextStyle}> Security </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle} activeOpacity={0.5}>
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

    ArrowIconStyle: {
        // padding: 10,
        marginRight: 0,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
        opacity: 0.2

    },

    TextStyle: {
        fontSize: 25,
        color: '#000',
        marginBottom: 4,
        marginRight: 20,
    },

})