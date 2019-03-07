import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native';

import TextField from '../commons/TextField';
import CustomPicker from '../commons/CustomPicker';
import IOSPicker from '../commons/IOSPicker';
import RadioButton from '../commons/RadioButton';
import { Button } from 'react-native-elements';
import { profileRiskCalc } from '../helpers/index';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

      ethnicity: '',   // asian, african, caucasian, hispanics, others
      age: '',         // <65, 65-69, 70-74, 75-79, 80-84, >=85
      gender: null,    // 0 for Male, 1 for Female
      height: '',
      weight: '',
      familyHistory: null,  // 1 for Yes, 0 for No
      smoking: null,        // 1 for Yes, 0 for No
      highBloodPressure: null,
      diabetes: null,

      isSubmitting: false,
    };

    // this.shouldComponentUpdate()

  };

  static navigationOptions = {
    title: 'My Profile',
  };

  componentWillMount() {
    const username = this.props.navigation.getParam('username');
    // fetch actual userdata from database
    // this.setState({
    //   ethnicity: ,
    //   age: ,
    //   gender: ,
    //   height: ,
    //   weight: ,
    //   familyHistory: ,
    //   smoking: ,
    //   highBloodPressure: ,
    //   diabetes: ,
    // });
  }

  componentDidUpdate() {
    // ****** temporary to see Profile Calculation ********
    const { ethnicity, age, gender, height, weight, familyHistory, smoking, highBloodPressure, diabetes } = this.state;
    if(!(ethnicity==''||age==''||gender==null||height==''||weight==''||familyHistory==null||smoking==null||highBloodPressure==null||diabetes==null)) {
      let profileRiskScore = profileRiskCalc(this.state);
      console.log(profileRiskScore);
      if(profileRiskScore >= 20) {
        console.log("HIGH RISK");
      } else if(profileRiskScore >= 13) {
        console.log("MODERATE RISK");
      } else {
        console.log("LOW RISK");
      }
    }

  }

  onPressNext = () => {
    const username = this.props.navigation.getParam('username');
    // this is where all local states will be posted to the database
    // for now, hardcoded some timeOut in place of actual request
    this.setState({
      isSubmitting: true,
    });
    setTimeout(()=>{
      console.log(this.state);
      this.setState({
        isSubmitting: false,
      });
      this.props.navigation.navigate('UserAssessment', {username: username});
    }, 1500);
  }

  renderIOSPicker = () => {
      return (
        <View>
          <IOSPicker
            label={"Ethnicity"}
            selectedValue={this.state.ethnicity}
            onValueChange={ethnicity=>this.setState({ethnicity})}
            items={['cancel', 'Asian', 'African','Caucasian', 'Hispanics', 'Others']}
          />
          <IOSPicker
            label={"Age"}
            selectedValue={this.state.age}
            onValueChange={age=>this.setState({age})}
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
          selectedValue={this.state.ethnicity}
          onValueChange={ethnicity=>this.setState({ethnicity})}
          items={[{label: 'Asian', value: 'Asian'},
                  {label: 'African', value: 'African'},
                  {label: 'Caucasian', value: 'Caucasian'},
                  {label: 'Hispanics', value: 'Hispanics'},
                  {label: 'Others', value: 'Others'}]}
        />
        <CustomPicker
          label={"Age"}
          selectedValue={this.state.age}
          onValueChange={age=>this.setState({age})}
          items={[{label: 'Less than 65', value: 'Less than 65'},
                  {label: '65-74', value: '65-74'},
                  {label: '75-84', value: '75-84'},
                  {label: '85 or older', value: '85 or older'}]}
        />
      </View>
    );
  }

  render() {
    const { ethnicity, age, gender, height, weight, familyHistory, smoking, highBloodPressure, diabetes } = this.state;

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
          onChange={option=>this.setState({gender:option.id})}
          activeButtonId={this.state.gender}
          horizontal
        />
        <TextField
          label={"Height(in)"}
          value={this.state.height}
          onChangeText={height=>this.setState({height})}
          keyboardType="numeric"
        />
        <TextField
          label={"Weight(lb)"}
          value={this.state.weight}
          onChangeText={weight=>this.setState({weight})}
          keyboardType="numeric"
        />
        <RadioButton
          label="Any family history of Alzheimer's Disease?"
          options={yes_no}
          onChange={option=>this.setState({familyHistory:option.id})}
          activeButtonId={this.state.familyHistory}
          horizontal
        />
        <RadioButton
          label="Do you smoke?"
          options={yes_no}
          onChange={option=>this.setState({smoking:option.id})}
          activeButtonId={this.state.smoking}
          horizontal
        />
        <Text style={{fontSize: 18, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold', marginTop: 8}}>Do you have any of the following medical conditions?</Text>
        <RadioButton
          label="High Blood Pressure"
          options={yes_no}
          onChange={option=>this.setState({highBloodPressure:option.id})}
          activeButtonId={this.state.highBloodPressure}
          horizontal
        />
        <RadioButton
          label="Diabetes"
          options={yes_no}
          onChange={option=>this.setState({diabetes:option.id})}
          activeButtonId={this.state.diabetes}
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
