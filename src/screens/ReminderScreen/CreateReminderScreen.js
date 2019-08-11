import React from "react";
import {ScrollView, Text, View} from "react-native";
import layoutControl from "../../Utils/variables/layout.variables";
import HeaderComponent from "../../components/header/HeaderComponent";
import defaults from "../../Utils/variables/default.variables";
import HeadTitle from "../../components/header-title";

class CreateReminderScreen extends React.Component {
  static navigationOptions = {
    title: 'CreateReminderScreen',
    tabBarLabel: 'CreateReminderScreen',
    ...defaults.stackNavigatorStyle
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderComponent content={'Header'}/>
        <ScrollView style={{flex: 1}}>
          <HeadTitle text={'Create a reminder'} />
          <View style={layoutControl.content}>
            <Text>content</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default CreateReminderScreen;
