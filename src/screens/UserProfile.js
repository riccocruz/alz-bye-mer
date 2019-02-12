import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import TextField from '../commons/TextField';
import CustomPicker from '../commons/CustomPicker';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ethnicity: '',
      age: '',
    };
  };

  static navigationOptions = {
    title: 'My Profile',
  };

  componentDidMount() {
    console.log(this.props.navigation.getParam('username'));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <TextField
          label={"Test Label"}
          placeholder={"Input test string"}
          value={this.state.text}
          onChangeText={(text)=>this.setState({text})}
        />
        <CustomPicker
          label={"Ethnicity"}
          selectedValue={this.state.ethnicity}
          onValueChange={ethnicity=>this.setState({ethnicity})}
          items={[{label: 'Asian', value: 'asian'},
                  {label: 'African', value: 'african'},
                  {label: 'Caucasian', value: 'caucasian'},
                  {label: 'Hispanics', value: 'hispanics'},
                  {label: 'Others', value: 'others'}]}
        />
        <CustomPicker
          label={"Age"}
          selectedValue={this.state.age}
          onValueChange={age=>this.setState({age})}
          items={[{label: 'Less than 65', value: '<65'},
                  {label: '65-69', value: '65-69'},
                  {label: '70-74', value: '70-74'},
                  {label: '75-79', value: '75-79'},
                  {label: '80-84', value: '80-84'},
                  {label: '85 or older', value: '>=85'}]}
        />
      </ScrollView>
    );
  }
};
