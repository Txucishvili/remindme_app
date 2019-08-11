import React, {Component} from 'react';
import SimpleInput from './SimpleInput';
import Routing from "./Layout/router-module";

export default class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routing />
    );
  }
}
