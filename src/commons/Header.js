import React from "React";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { ifIphoneX } from 'react-native-iphone-x-helper';


const Header = ({handleSignOut}) => {
  return (
    <View style={styles.container} backgroundColor="#c43235">
        <Text style={styles.text}>ALZ-BYE-MER</Text>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={handleSignOut}>
          <FontAwesome name="sign-out" size={32} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={32} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="settings" size = {32} style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// ({navigate}) => {
//   const signOut = () => {
//     Auth.signOut();
//   }
//   return (
//     <View style={styles.container} backgroundColor="#c43235">
//         <Text style={styles.text}>ALZ-BYE-MER</Text>
//       <View style={{flexDirection:"row"}}>
//         <TouchableOpacity onPress={signOut}>
//           <FontAwesome name="sign-out" size={32} style={styles.icon}/>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <MaterialIcons name="notifications" size={32} style={styles.icon}/>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <MaterialIcons name="settings" size = {32} style={styles.icon}/>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // marginBottom: getBottomSpace(),
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    ...ifIphoneX({
      paddingTop: 50
      }, {
      paddingTop: 20
      }, {
      paddingBottom: 34
    })

  },
  text: {
    fontSize: 24,
    color:"white",
    fontWeight: "bold"
  },
  icon: {
    color:"white",
    marginLeft: 3,
    marginRight: 3,
  },
});

export default Header;
