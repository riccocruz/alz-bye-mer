import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation'
import { Auth, API, graphqlOperation } from 'aws-amplify';

import { listUsers } from '../graphql/queries';
import { updateUser } from '../graphql/mutations';
import TextField from '../commons/TextField';
import CustomPicker from '../commons/CustomPicker';
import RadioButton from '../commons/RadioButton';
import { Button } from 'react-native-elements';
import { riskScoreCalc } from '../helpers/riskCalc';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      responses: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
      isSubmitting: false,
      isComplete: false,
    };
  };

  static navigationOptions = {
    title: 'My Profile',
  };

  componentDidMount() {
    const username = this.props.navigation.getParam('username');
    this.fetchUserProfile(username)
    .then(data => {
      const profile = data.data.listUsers.items[0];
      delete profile.physicals;
      delete profile.cognitives;
      this.setState({
        profile: profile
      });
    });
  }

  componentDidUpdate() {

  }

  fetchUserProfile(username) {
    return API.graphql(graphqlOperation(listUsers, {
      filter: {
        username: { eq: username }
      }
    }));
  }

  updateUserProfile(profile) {
    return API.graphql(graphqlOperation(updateUser, {
      input: profile
    }));
  }

  onPressSubmit = () => {
    profile = Object.assign({}, this.state.profile);
    profile.riskScore = riskScoreCalc(profile.profileScore, profile.assessmentScore);
    // this is where all local states will be posted to the database
    this.setState({
      isSubmitting: true,
      profile
    }, () => {
        this.updateUserProfile(this.state.profile)
        .then(data => {
          this.setState({
            isSubmitting: false,
          });
          this.props.navigation.dispatch(StackActions.reset({
           index: 0,
           actions: [
             NavigationActions.navigate({
               routeName: 'HomeScreen',
             }),
           ],
          }));
        });
    });
  }


  renderQuestions = () => {
    const questions = [
      {id: 0, q: "1.Do you have memory loss?", point: 1},
      {id: 1, q: "2.If so, is your memory worse than a few years ago?", point: 1},
      {id: 2, q: "3.Do you repeat questions or stories in the same day?", point: 2},
      {id: 3, q: "4.Do you forget appointments?", point: 1},
      {id: 4, q: "5.Do you misplace items more than once a month?", point: 1},
      {id: 5, q: "6.Do you suspect others are moving, hiding or stealing items when they cannot find them?", point: 1},
      {id: 6, q: "7.Do you frequently have trouble remembering the day, date, month, year, time more than once a day?", point: 2},
      {id: 7, q: "8.Do you become disoriented in unfamiliar places?", point: 1},
      {id: 8, q: "9.Are you confused while travelling?", point: 1},
      {id: 9, q: "10.Do you have trouble handling money?", point: 1},
      {id: 10, q: "11.Do you find that you have difficulty in executing simple financial calculations?", point: 2},
      {id: 11, q: "12.Do you have trouble remembering to take medications or tracking medications taken?", point: 1},
      {id: 12, q: "13.Do you have difficulty in driving vehicles?", point: 1},
      {id: 13, q: "14.Do you have trouble using home appliances such as oven, stove, remote control, telephone, alarm clock?", point: 1},
      {id: 14, q: "15.If you do not have any physical limitations, do you have difficulty in completing simple housekeeping or home repairing tasks?", point: 1},
      {id: 15, q: "16.If you do not have any physical limitations, have you given up or significantly reduced activities such as dancing, exercising, or crafts?", point: 1},
      {id: 16, q: "17.Do you get lost in familiar surroundings or in your neighbourhood?", point: 2},
      {id: 17, q: "18.Do you have a decreased sense of direction?", point: 1},
      {id: 18, q: "19.Do you have trouble finding words other than names?", point: 1},
      {id: 19, q: "20.Do you confuse names of family members or friends?", point: 2},
      {id: 20, q: "21.Do you have difficulty recognizing people familiar to you?", point: 2},
    ];
    const yes_no = [
      {label: 'Yes', value: 1},
      {label: 'No', value: 0},
    ];
    return questions.map((question) => {
      return(
        <RadioButton
          key={question.id}
          label={question.q}
          options={yes_no}
          initial={-1}
          onPress={value=>this._onPress(value, question)}
          horizontal
        />
      );
    });
  }

  _onPress = (value, question) => {
    let tempArray = this.state.responses;
    const index = question.id;
    tempArray[index] = question.point*value;
    this.setState({
      responses: tempArray,
    });

    let sum = 0;
    let completed = 0;
    this.state.responses.map(response => {
      if(response != null) {
        sum+=response;
        completed++;
      }
    });
    this.setState(previousState => ({
      profile: {
        ...previousState.profile,
        assessmentScore: sum
      },
      isComplete: completed==21? true: false,
    }));
  }

  render() {

    return (
      <ScrollView>
        {this.renderQuestions()}
        <Button
          title="Submit"
          containerStyle={{width:'50%', alignSelf:'center', marginTop: 20, marginBottom: 20}}
          raised
          loading={this.state.isSubmitting}
          disabled={this.state.isSubmitting||!this.state.isComplete}
          onPress={this.onPressSubmit}
        />
      </ScrollView>
    );
  }
};
