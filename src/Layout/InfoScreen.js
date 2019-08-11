import React from "react";
import {Text, View} from "react-native";
import layoutControl from "../Utils/variables/layout.variables";

class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'SettingsScreen',
    headerStyle: {
      backgroundColor: '#200f21',
      height: layoutControl.header.height
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: layoutControl.header.fontSize,
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>InfoScreen!</Text>
      </View>
    );
  }
}

export default InfoScreen;
