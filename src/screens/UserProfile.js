import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import { listUsers } from '../graphql/queries';
import { updateUser } from '../graphql/mutations';
import TextField from '../commons/TextField';
import CustomPicker from '../commons/CustomPicker';
import IOSPicker from '../commons/IOSPicker';
import RadioButton from '../commons/RadioButton';
import { Button } from 'react-native-elements';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        id: '',
        ethnicity: '',   // asian, african, caucasian, hispanics, others
        age: '',         // <65, 65-69, 70-74, 75-79, 80-84, >=85
        gender: null,    // 0 for Male, 1 for Female
        height: '',
        weight: '',
        familyHistory: null,  // 1 for Yes, 0 for No
        smoking: null,        // 1 for Yes, 0 for No
        highBloodPressure: null,
        diabetes: null,
      },
      isSubmitting: false
    }

    // this.shouldComponentUpdate()

  };

  static navigationOptions = {
    title: 'My Profile',
  };

  componentDidMount() {
    const username = this.props.navigation.getParam('username');
    // fetch actual userdata from database
    this.fetchUserProfile(username)
    .then(data => {
      const profile = data.data.listUsers.items[0];
      delete profile.physicals;
      this.setState({
        profile: profile
      });
      console.log(profile);
    });
  }

  componentDidUpdate() {

    console.log(this.state);
  }

  onPressNext = () => {
    const username = this.props.navigation.getParam('username');
    // this is where all local states will be posted to the database
    // for now, hardcoded some timeOut in place of actual request
    this.setState({
      isSubmitting: true,
    });
    this.updateUserProfile(this.state.profile)
    .then(data => {
      this.setState({
        isSubmitting: false,
      });
      this.props.navigation.navigate('UserAssessment', {username: username});
    });
  }

  fetchUserProfile(username) {
    return API.graphql(graphqlOperation(listUsers, {
      filter: {
        username: { eq: username }
      },
      limit: 1
    }));
  }

  updateUserProfile(profile) {
    return API.graphql(graphqlOperation(updateUser, {
      input: profile
    }));
  }

  renderIOSPicker = () => {
      return (
        <View>
          <IOSPicker
            label={"Ethnicity"}
            selectedValue={this.state.profile.ethnicity}
            onValueChange={ethnicity => {
              let profile = Object.assign({}, this.state.profile);
              profile.ethnicity = ethnicity;
              this.setState({profile: profile});
            }}
            items={['cancel', 'Asian', 'African','Caucasian', 'Hispanics', 'Other']}
          />
          <IOSPicker
            label={"Age"}
            selectedValue={this.state.profile.age}
            onValueChange={ethnicity => {
              let profile = Object.assign({}, this.state.profile);
              profile.age = age;
              this.setState({profile: profile});
            }}
            items={['cancel', 'Less than 65', '65-69','70-74', '75-79', '80-84', '85 or older']}
          />
        </View>
      );

  }
  renderAndroidPicker = () => {
    return (
      <View>
        <CustomPicker
          label={"Ethnicity"}
          selectedValue={this.state.profile.ethnicity}
          onValueChange={ethnicity => {
            let profile = Object.assign({}, this.state.profile);
            profile.ethnicity = ethnicity;
            this.setState({profile: profile});
          }}
          items={[{label: 'Asian', value: 'Asian'},
                  {label: 'African', value: 'African'},
                  {label: 'Caucasian', value: 'Caucasian'},
                  {label: 'Hispanics', value: 'Hispanics'},
                  {label: 'Other', value: 'Other'}]}
        />
        <CustomPicker
          label={"Age"}
          selectedValue={this.state.profile.age}
          onValueChange={age => {
            let profile = Object.assign({}, this.state.profile);
            profile.age = age;
            this.setState({profile: profile});
          }}
          items={[{label: 'Less than 65', value: 'Less than 65'},
                  {label: '65-69', value: '65-69'},
                  {label: '70-74', value: '70-74'},
                  {label: '75-79', value: '75-79'},
                  {label: '80-84', value: '80-84'},
                  {label: '85 or older', value: '85 or older'}]}
        />
      </View>
    );
  }

  render() {
    const { ethnicity, age, gender, height, weight, familyHistory, smoking, highBloodPressure, diabetes } = this.state.profile;

    const gender_options = [
      {id: 0, label: 'Male'},
      {id: 1, label: 'Female'},
    ];
    const yes_no = [
      {id: 1, label: 'Yes'},
      {id: 0, label: 'No'},
    ];

    return (
      <ScrollView>
        {Platform.OS == 'ios'? this.renderIOSPicker():this.renderAndroidPicker()}
        <RadioButton
          label="Gender"
          options={gender_options}
          onChange={option => {
            let profile = Object.assign({}, this.state.profile);
            profile.gender = (option.id === 0 ? "Female" : "Male");
            this.setState({profile: profile});
          }}
          activeButtonId={(this.state.profile.gender === "Male" ? 0 : 1)}
          horizontal
        />
        <TextField
          label={"Height(in)"}
          value={this.state.profile.height.toString()}
          onChangeText={height => {
            let profile = Object.assign({}, this.state.profile);
            profile.height = height;
            this.setState({profile: profile});
          }}
          keyboardType="numeric"
        />
        <TextField
          label={"Weight(lb)"}
          value={this.state.profile.weight.toString()}
          onChangeText={weight => {
            let profile = Object.assign({}, this.state.profile);
            profile.weight = weight;
            this.setState({profile: profile});
          }}
          keyboardType="numeric"
        />
        <RadioButton
          label="Any family history of Alzheimer's Disease?"
          options={yes_no}
          onChange={option => {
            let profile = Object.assign({}, this.state.profile);
            profile.familyHistory = !!option.id;
            this.setState({profile: profile});
          }}
          activeButtonId={(this.state.profile.familyHistory ? 1 : 0)}
          horizontal
        />
        <RadioButton
          label="Do you smoke?"
          options={yes_no}
          onChange={option => {
            let profile = Object.assign({}, this.state.profile);
            profile.smoking = !!option.id;
            this.setState({profile: profile});
          }}
          activeButtonId={(this.state.profile.smoking ? 1 : 0)}
          horizontal
        />
        <Text style={{fontSize: 18, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold', marginTop: 8}}>Do you have any of the following medical conditions?</Text>
        <RadioButton
          label="High Blood Pressure"
          options={yes_no}
          onChange={option => {
            let profile = Object.assign({}, this.state.profile);
            profile.highBloodPressure = !!option.id;
            this.setState({profile: profile});
          }}
          activeButtonId={(this.state.profile.highBloodPressure ? 1 : 0)}
          horizontal
        />
        <RadioButton
          label="Diabetes"
          options={yes_no}
          onChange={option => {
            let profile = Object.assign({}, this.state.profile);
            profile.diabetes = !!option.id;
            this.setState({profile: profile});
          }}
          activeButtonId={(this.state.profile.diabetes ? 1 : 0)}
          horizontal
        />
        <Button
          title="Next"
          containerStyle={{width:'50%', alignSelf:'center', marginTop: 20}}
          raised
          loading={this.state.isSubmitting}
          disabled={this.state.isSubmitting||ethnicity==''||age==''||gender==null||height==''||weight==''||familyHistory==null||smoking==null||highBloodPressure==null||diabetes==null}
          onPress={this.onPressNext}
        />
      </ScrollView>
    );
  }
};
