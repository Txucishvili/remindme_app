import React from "react";
import {Text, View, ScrollView} from "react-native";
import defaults from "../../Utils/variables/default.variables";
import HeaderComponent from "../../components/header/HeaderComponent";
import HeadTitle from "../../components/header-title";
import layoutControl from "../../Utils/variables/layout.variables";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'SettingsScreen',
    tabBarLabel: 'SettingsScreen',
    ...defaults.stackNavigatorStyle
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderComponent content={'Header'}/>
        <ScrollView style={{flex: 1}}>
          <HeadTitle text={'Settings'} />
          <View style={layoutControl.content}>
            <Text>content</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default SettingsScreen;
