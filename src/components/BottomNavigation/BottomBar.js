import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import posed from "react-native-pose/lib/index";
import {iconsMap} from '../../components/icon';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 5;
const SpotLight = posed.View({
  route0: {x: 0},
  route1: {x: tabWidth},
  route2: {x: tabWidth * 2},
  route3: {x: tabWidth * 3}
});

const S = StyleSheet.create({
  container: {
    flexDirection: "row", height: 52, elevation: 2, backgroundColor: '#925FFF',
  },
  tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  spotLight: {
    width: tabWidth,
    height: "100%",
    backgroundColor: "#E3E7F1"
  }
});

const BottomBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;

  return (
    <View style={S.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`}/>
      </View>

      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}
          >
            {renderIcon({route, focused: isRouteActive, tintColor})}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomBar;
