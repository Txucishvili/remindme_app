import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Button, ScrollView, Dimensions} from 'react-native';

export default class SimpleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  doNone = () => {
    console.log('hitt');
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.wrapper}>
          <TextInput
            style={{...styles.input}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          {this.state.text
            ? this.state.text.split(' ').map((item, k) => {
              return <Text key={k} style={{...styles.container}}>
                {item}
              </Text>
            })
            : null
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12
  },
  scroll: {
  },
  container: {
    backgroundColor: '#ff5858',
    padding: 16,
    marginTop: 8,
    fontSize: 42,
    color: '#032535',
    borderRadius: 8
  },
  input: {
    height: 40,
    borderBottomColor: '#ff5858',
    borderBottomWidth: 1,
    marginTop: 14,
  }
});
