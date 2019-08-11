import {BottomNavIcons} from "../BottomNavigation/BottomNavIcons";
import React from "react";

const BottomNavItem = ({name, color, ...props}) => {
  return  <BottomNavIcons name={name} color={color} {...props} />
};

export default BottomNavItem;
