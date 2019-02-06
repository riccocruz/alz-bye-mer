import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default class Login extends React.Component {

  onLoginPress = () => {
    // do nothing
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <Text style={styles.logo_text}>ALZ-BYE-MER</Text>
        <Image
          style={styles.logo_image}
          source={require('../assets/img/logo_icon.png')}
          resizeMode={'contain'}
        />


        <View style={styles.login_box}>
          <View style={{flexDirection:"row"}}>
            <FontAwesome name="user" size={32} style={{marginRight: 8}}/>
            <TextInput
              style={styles.inputbox}
              textContentType='username'
            />
          </View>
          <View style={{flexDirection:"row", marginTop: 10}}>
            <FontAwesome name="lock" size={32} style={{marginRight: 10}}/>
            <TextInput
              style={styles.inputbox}
              textContentType='password'
              secureTextEntry
            />
          </View>
          <View style={{marginTop: 10}}>
            <Button
              title="LOG-IN"
              color="#334431"
              onPress={this.onLoginPress}
            />
            <TouchableOpacity style={{marginTop:8}}>
              <Text style={{textDecorationLine:"underline", color:"#729f98"}}>Create a new account</Text>
            </TouchableOpacity>
          </View>
        </View>


      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#c43235',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_text: {
    fontSize: 40,
    color: "#fff",
    fontFamily: 'System',
    textShadowColor: "black",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3
  },
  logo_image: {
    height: 200,
  },
  login_box: {
    marginTop: 100,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    alignItems: "center",
  },
  inputbox: {
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    paddingLeft: 5,
    paddingRight: 5
  },
});
