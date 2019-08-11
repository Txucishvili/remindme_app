import React from "react";
import {Button, View} from "react-native";
import layoutControl from "../../Utils/variables/layout.variables";

class EditorScreen extends React.Component {
  static navigationOptions = {
    title: 'Editor Mode',
    tabBarLabel: 'Editorssss',
    headerStyle: {
      backgroundColor: '#fbc99d',
      height: layoutControl.header.height
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: layoutControl.header.fontSize,
    }
  };

  static openCameraDialog = (config, successCallback, cancelCallback) => {
    console.log('hit');
  };


  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* other code from before here */}
        <Button
          title="Info"
          onPress={() => this.props.navigation.navigate('Info')}
        />
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default EditorScreen;
