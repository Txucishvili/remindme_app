import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import ModalScreen from "./ModalScreen";
import EditorScreen from "../screens/EditorScreen/EditorScreen";
import InfoScreen from "./InfoScreen";
import WriteScreen from "../screens/WriteScreen/WriteScreen";
import ReminderScreen from "../screens/ReminderScreen/ReminderScreen";
import CreateReminderScreen from "../screens/ReminderScreen/CreateReminderScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import BottomBar from "../components/BottomNavigation/BottomBar";
import FeedScreen from "../screens/FeedScreen/FeedScreen";
import BottomNavItem from "../components/BottomNavigation/BottomNavItem";

const HomeStack = createStackNavigator({
    Home: {
      screen: FeedScreen,
      patch: 'Home',
      navigationOptions: {
        tabBarLabel: 'Home',
        content: 'hhh'
      }
    }
  }, {
    headerMode: 'none',
  });

const ReminderStack = createStackNavigator({
  Settings: ReminderScreen
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: 'Reminder',
    content: 'ReminderStack'
  },
});

const CreateReminderStack = createStackNavigator({
  Settings: CreateReminderScreen
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: 'Create',
    content: 'CreateReminderStack'
  },
});

const SettingStack = createStackNavigator({
  Settings: SettingsScreen
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: 'Settings',
    content: 'SettingStack'
  },
});


const WriterStack = createStackNavigator({
  Writer: WriteScreen,
}, {
  navigationOptions: {
    tabBarLabel: 'Writer',
  },
});

const EditorStack = createStackNavigator({
  Settings: EditorScreen,
  Details: ModalScreen,
  Info: InfoScreen,
}, {
  navigationOptions: {
    tabBarLabel: 'Editor',
  },
});


const bottomTabNavigator = createBottomTabNavigator({
    HomeScreen: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <BottomNavItem name={'home'} color={tintColor} />
      }
    },
    ReminderScreen: {
      screen: ReminderStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <BottomNavItem name={'reminder'} color={tintColor}/>
      }
    },
    CreateReminderScreen: {
      screen: CreateReminderStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <BottomNavItem name={'create'} color={tintColor}/>
      }
    },
  settingsScreen: {
    screen: SettingStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <BottomNavItem name={'settings'} color={tintColor}/>
    }
  }
  ,
  feedBackScreen: {
    screen: SettingStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <BottomNavItem name={'feedback'} color={tintColor}/>
    }
  }
  }, {
    tabBarComponent: BottomBar,
    tabBarOptions: {
      activeTintColor: '#494CA2',
      inactiveTintColor: '#2E1660',
      style: {
        backgroundColor: '#925FFF'
      }
    }
  });

const AppRoutingContainer = createAppContainer(bottomTabNavigator);

export default AppRoutingContainer;
