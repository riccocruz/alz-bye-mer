import React from 'react';
import { Picker, View, Text, StyleSheet, TouchableOpacity, ActionSheetIOS } from 'react-native';

const IOSPicker = ({ label, items, selectedValue, onValueChange }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={()=>renderActionSheet(items, onValueChange)}><Text style={{textTransform:'capitalize'}}>{selectedValue} arrow</Text></TouchableOpacity>
    </View>
  );
};
const renderActionSheet = (items, onValueChange) => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: items,
      destructiveButtonIndex: 0,
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if(buttonIndex != 0)
      onValueChange(items[buttonIndex]);
    },
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
});

export default IOSPicker;
