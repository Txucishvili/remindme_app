import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import layoutControl from "../../Utils/variables/layout.variables";
import SimpleInput from "../../SimpleInput";
import HeaderComponent from "../../components/header/HeaderComponent";

class WriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Placeholder',
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

  componentDidMount() {
    console.log(this.props.navigation);
  }

  render() {
    return (
      <View>
        <HeaderComponent
          style={styles.header}
          content={this.props.navigation.title}
        />
        <SimpleInput />
      </View>
    );
  }
}

export default WriteScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: 40
  }
});
