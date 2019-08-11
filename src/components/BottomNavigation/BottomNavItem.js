import {Icon} from "../icon";
import React from "react";

const BottomNavItem = ({name, color, ...props}) => {
  return  <Icon name={name} color={color} {...props} />
};

export default BottomNavItem;
