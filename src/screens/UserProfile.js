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
import { profileRiskCalc } from '../helpers/riskCalc';

import { Pedometer } from 'expo';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        id: '',
        ethnicity: '',   // asian, african, caucasian, hispanics, others
        age: '',         // Less than 65, 65-74, 75-79, 80-84, >=85
        gender: null,    // Male, Female
        height: '',
        weight: '',
        familyHistory: null,  // 1 for Yes, 0 for No
        smoking: null,        // 1 for Yes, 0 for No
        highBloodPressure: null,
        diabetes: null,
        profileScore: 0,
      },
      isSubmitting: false,
      isLoading: true
    }

    // this.shouldComponentUpdate()

  };

  static navigationOptions = {
    title: 'My Profile',
  };

  componentWillMount() {
    this._initStepCount();
  }

  componentDidMount() {
    const username = this.props.navigation.getParam('username');
    // fetch actual userdata from database
    this.fetchUserProfile(username)
    .then(data => {
      const profile = data.data.listUsers.items[0];
      delete profile.physicals;
      delete profile.cognitives;
      this.setState({
        profile: profile,
        isLoading: false
      });
      console.log(profile);
    });
  }

  componentDidUpdate() {
    // ****** temporary to see Profile Calculation ********
    // const { ethnicity, age, gender, height, weight, familyHistory, smoking, highBloodPressure, diabetes } = this.state.profile;
    // if(!(ethnicity==''||age==''||gender==null||height==''||weight==''||familyHistory==null||smoking==null||highBloodPressure==null||diabetes==null)) {
    //   let profileRiskScore = profileRiskCalc(this.state.profile);
    //   console.log(profileRiskScore);
    //   if(profileRiskScore >= 20) {
    //     console.log("HIGH RISK");
    //   } else if(profileRiskScore >= 13) {
    //     console.log("MODERATE RISK");
    //   } else {
    //     console.log("LOW RISK");
    //   }
    // }
    console.log(this.state);
  }

  _initStepCount() {
    let end = new Date();
    let start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({
          currentStepCount: result.steps,
          distance: result.steps / 2500
        });
      },
      error => {
        this.setState({
          currentStepCount: "Could not get stepCount: " + error
        });
      }
    );
  }

  onPressNext = () => {
    const username = this.props.navigation.getParam('username');
    let profile = Object.assign({}, this.state.profile);
    profile.profileScore = profileRiskCalc(this.state.profile);
    // this is where all local states will be posted to the database
    // for now, hardcoded some timeOut in place of actual request
    this.setState({
      isSubmitting: true,
      profile: profile
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
            onValueChange={age => {
              let profile = Object.assign({}, this.state.profile);
              profile.age = age;
              this.setState({profile: profile});
            }}
            items={['cancel', 'Less than 65', '65-74', '75-84', '85 or older']}
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
                  {label: '65-74', value: '65-74'},
                  {label: '75-84', value: '75-84'},
                  {label: '85 or older', value: '85 or older'}]}
        />
      </View>
    );
  }

  renderLoading = () => {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" style={{marginTop: 250}}/>
      </View>
    )
  }

  render() {

    if(this.state.isLoading) {
      return (this.renderLoading());
    }

    const { ethnicity, age, gender, height, weight, familyHistory, smoking, highBloodPressure, diabetes } = this.state.profile;

    const gender_options = [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'},
    ];
    const yes_no = [
      {label: 'Yes', value: true},
      {label: 'No', value: false},
    ];

    return (
      <ScrollView>
        {Platform.OS == 'ios'? this.renderIOSPicker():this.renderAndroidPicker()}
        <RadioButton
          label="Gender"
          options={gender_options}
          onPress={value => {
            let profile = Object.assign({}, this.state.profile);
            profile.gender = value;
            this.setState({profile});
          }}
          initial={gender}
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
          onPress={value => {
            let profile = Object.assign({}, this.state.profile);
            profile.familyHistory = value;
            this.setState({profile});
          }}
          initial={familyHistory}
          horizontal
        />
        <RadioButton
          label="Do you smoke?"
          options={yes_no}
          onPress={value => {
            let profile = Object.assign({}, this.state.profile);
            profile.smoking = value;
            this.setState({profile});
          }}
          initial={smoking}
          horizontal
        />
        <Text style={{fontSize: 18, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold', marginTop: 8}}>Do you have any of the following medical conditions?</Text>
        <RadioButton
          label="High Blood Pressure"
          options={yes_no}
          onPress={value => {
            let profile = Object.assign({}, this.state.profile);
            profile.highBloodPressure = value;
            this.setState({profile});
          }}
          initial={highBloodPressure}
          horizontal
        />
        <RadioButton
          label="Diabetes"
          options={yes_no}
          onPress={value => {
            let profile = Object.assign({}, this.state.profile);
            profile.diabetes = value;
            this.setState({profile});
          }}
          initial={diabetes}
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
