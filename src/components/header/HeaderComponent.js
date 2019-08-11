import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Svg, {Path, G} from 'react-native-svg';
import defaults from "../../Utils/variables/default.variables";

const Logo = props => (
  <Svg width="173" height="45" fill="#fff" viewBox="0 0 154.02 40" {...props}>
    <Path id="prefix__Rectangle_4_1_" fill="#925fff" d="M0 0h104v40H0z"/>
    <G className="prefix__st1">
      <Path
        className="prefix__st2"
        d="M15.1 21.01V28h-4.32V15.55h3.8l.26.75h.1c.4-.45.8-.74 1.21-.87s1.07-.19 1.99-.19l-.18 4.16h-1.2c-.68 0-1.12.1-1.34.31s-.32.64-.32 1.3zM24.87 15.23c1.79 0 3.06.43 3.83 1.29.77.86 1.16 2.08 1.16 3.68 0 .21-.06 1.14-.18 2.81h-5.93c0 1.3.6 1.95 1.79 1.95.57 0 1.69-.2 3.35-.6l.36 3.22c-1.46.45-2.91.68-4.37.68-1.79 0-3.15-.58-4.11-1.75-.95-1.17-1.43-2.76-1.43-4.77.02-4.34 1.86-6.51 5.53-6.51zm-.1 3.72c-.45 0-.75.15-.88.46-.14.3-.21.77-.21 1.39h2.26v-.62c0-.82-.39-1.23-1.17-1.23zM42.27 16.46c.95-.81 2-1.22 3.15-1.22s1.95.26 2.41.79c.46.53.69 1.32.69 2.38V28H44.1v-8.11c0-.43-.19-.65-.57-.65-.49 0-.89.12-1.22.36V28h-4.42v-8.11c0-.43-.19-.65-.57-.65-.49 0-.89.12-1.22.36V28h-4.37V15.55h3.98l.26.91h.1c.95-.81 2.08-1.22 3.39-1.22s2.16.49 2.56 1.46l.25-.24zM51.16 14.69c-.36-.31-.55-.82-.55-1.51 0-.69.18-1.2.55-1.53.36-.33.96-.49 1.79-.49s1.43.17 1.79.49c.36.33.55.84.55 1.52s-.18 1.19-.55 1.51c-.36.32-.96.48-1.79.48s-1.43-.16-1.79-.47zM55.11 28h-4.29V15.68h4.29V28zM61.74 16.46c.95-.81 2-1.22 3.15-1.22s1.95.26 2.4.79c.46.53.69 1.32.69 2.38V28h-4.42v-8.11c0-.43-.19-.65-.57-.65-.49 0-.89.12-1.22.36V28H57.4V15.55h3.98l.26.91h.1zM81.21 28.16l-1.74.1c-1.33 0-2.15-.44-2.44-1.33h-.13c-.57.88-1.45 1.33-2.63 1.33-1.56 0-2.66-.55-3.29-1.64-.63-1.09-.95-2.72-.95-4.88s.35-3.78 1.07-4.88c.71-1.09 1.73-1.64 3.07-1.64.92 0 1.63.22 2.13.65v-4.55h4.34v12.84c0 .33.07.55.21.66.14.11.39.17.75.17l-.39 3.17zm-5.89-9.26c-.37 0-.62.22-.74.66-.12.44-.18 1.07-.18 1.9s.01 1.38.03 1.68c.02.29.06.59.12.9.06.3.16.51.29.62s.35.17.65.17.62-.08.95-.23v-5.38c-.38-.22-.74-.32-1.12-.32zM88.54 15.23c1.79 0 3.06.43 3.83 1.29.77.86 1.16 2.08 1.16 3.68 0 .21-.06 1.14-.18 2.81h-5.93c0 1.3.6 1.95 1.79 1.95.57 0 1.69-.2 3.35-.6l.36 3.22c-1.46.45-2.91.68-4.37.68-1.79 0-3.15-.58-4.11-1.75-.95-1.17-1.43-2.76-1.43-4.77.02-4.34 1.86-6.51 5.53-6.51zm-.1 3.72c-.45 0-.75.15-.88.46-.14.3-.21.77-.21 1.39h2.26v-.62c0-.82-.39-1.23-1.17-1.23z"
      />
    </G>
    <Path id="prefix__Rectangle_5_1_" fill="#d8dde7" d="M104.02 0h50v40h-50z"/>
    <G className="prefix__st1">
      <Path
        className="prefix__st2"
        d="M125.34 16.46c.95-.81 2-1.22 3.15-1.22s1.95.26 2.41.79c.46.53.69 1.32.69 2.38V28h-4.42v-8.11c0-.43-.19-.65-.57-.65-.49 0-.89.12-1.22.36V28h-4.42v-8.11c0-.43-.19-.65-.57-.65-.49 0-.89.12-1.22.36V28h-4.37V15.55h3.98l.26.91h.1c.95-.81 2.08-1.22 3.39-1.22s2.16.49 2.56 1.46l.25-.24zM139.09 15.23c1.79 0 3.06.43 3.83 1.29.77.86 1.16 2.08 1.16 3.68 0 .21-.06 1.14-.18 2.81h-5.93c0 1.3.6 1.95 1.79 1.95.57 0 1.69-.2 3.35-.6l.37 3.22c-1.46.45-2.91.68-4.37.68-1.79 0-3.15-.58-4.11-1.75s-1.43-2.76-1.43-4.77c.01-4.34 1.85-6.51 5.52-6.51zm-.1 3.72c-.45 0-.75.15-.88.46s-.21.77-.21 1.39h2.26v-.62c0-.82-.39-1.23-1.17-1.23z"
      />
    </G>
  </Svg>
);

class HeaderComponent extends Component {
  static propTypes = {
    style: PropTypes.object,
    content: PropTypes.string
  };

  render = () => {
    const {style, content} = this.props;

    return (
      <View style={styles.header}>
        <View style={styles.logoView}>
          <TouchableOpacity><Logo onClick={() => console.log('hur')} /></TouchableOpacity>
        </View>
        <View style={styles.user}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: defaults.STATUSBAR_HEIGHT,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0, 0)',
    width: Dimensions.get('window').width
  },
  logoView: {
    flex: 1
  },
  user: {
    width: 45,
    height: 45,
    backgroundColor: '#494CA2'
  }
});

export default HeaderComponent;
