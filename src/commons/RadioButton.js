import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-button-group';

/**
 * label: the label for the radio button group
 * options: array of objects ex) [{id: 0, label: 'option1'}, {id: 1, label: 'option2'}, ...]
 * onChange: call back function for what to do when user changes an option
 * horizontal: (optional) layout of radio buttons, default to vertial alignment.
*/

const RadioButton = ({ label, options, onChange, horizontal, activeButtonId }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RadioGroup
        options={options}
        onChange={onChange}
        horizontal={horizontal}
        activeButtonId={activeButtonId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5
  },
  label: {
    flex: 1,
    fontSize: 18,
  },
  options: {
    flex: 2
  }
});

export default RadioButton;
