import {Platform, StatusBar, NativeModules} from "react-native";
import layoutControl from "./layout.variables";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const defaults = {};

defaults.STATUSBAR_HEIGHT = STATUSBAR_HEIGHT;

defaults.colors = {
  color_Feed: '#49beb7'
};

defaults.stackNavigatorStyle = {
  headerStyle: {
    backgroundColor: defaults.colors.color_Feed,
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: layoutControl.header.fontSize,
  }
};


export default defaults;
