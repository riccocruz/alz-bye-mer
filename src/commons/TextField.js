import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TextField = ({ label, placeholder, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        selectionColor={'#428AF8'}
        underlineColorAndroid={'#428AF8'}
        keyboardType={keyboardType? keyboardType:'default'}
      />
    </View>
  );
};

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
  input: {
    flex: 2,
    fontSize: 18,
    height: 40,
  }
});

export default TextField;
