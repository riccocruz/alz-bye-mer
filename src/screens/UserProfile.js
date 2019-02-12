import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity,  } from 'react-native';

import TextField from '../commons/TextField';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  };

  static navigationOptions = {
    title: 'My Profile',
  };

  componentDidUpdate() {
    console.log(this.state.text);
    console.log(this.props.navigation.getParam('username'));
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <TextField
          label={"Test Label"}
          placeholder={"Input test string"}
          value={this.state.text}
          onChangeText={(text)=>this.setState({text})}
        />
      </View>
    );
  }
};
