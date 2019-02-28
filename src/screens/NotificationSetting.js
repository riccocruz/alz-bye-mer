import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class NotifiationSetting extends Component {
    static navigationOptions = {
        title: 'Notifications',
        fontWeight: 'bold'
    };

    state = {
      isOnNotificationSwitch: true,
      isOnSoundSwitch: true,
      isOnVibrationSwitch: true
    };

  render() {
    return (
      <View>
      <ToggleSwitch
        isOn={this.state.isOnNotificationSwitch}
        onColor='green'
        label='Notification'
        size = 'large'
        labelStyle={styles.SwitchStyle}
        onToggle={isOnNotificationSwitch => {
          this.setState({ isOnNotificationSwitch });
        }}
      />

      <ToggleSwitch
        isOn={this.state.isOnSoundSwitch}
        onColor='green'
        label='Sound'
        size = 'large'
        labelStyle={styles.SwitchStyle}
        onToggle={isOnSoundSwitch => {
          this.setState({ isOnSoundSwitch });
        }}
      />

      <ToggleSwitch
        isOn={this.state.isOnVibrationSwitch}
        onColor='green'
        label='Vibration'
        size = 'large'
        labelStyle={styles.SwitchStyle}
        onToggle={isOnVibrationSwitch => {
          this.setState({ isOnVibrationSwitch });
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 10,
  },

  TextStyle: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 18, 
    // color: '#0000'
  },

  ViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 

  SwitchStyle: {
    marginRight: 10,
    margin: 20, 
    color: 'black', 
    fontWeight: 'bold', 
    flex: 1, 
    fontSize: 18, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  }
});