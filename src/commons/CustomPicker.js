import React from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';

const CustomPicker = ({ label, items, onValueChange, selectedValue }) => {
  renderPickerItem = items.map(item => {
      return (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      );
    });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{height: 50, flex: 2}}
        mode={'dialog'}
      >
        <Picker.Item label='' value='' disabled/>
        {renderPickerItem}
      </Picker>
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
});

export default CustomPicker;
