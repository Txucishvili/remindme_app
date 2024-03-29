import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Application from './src/App';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Application />
    );
  }
}
