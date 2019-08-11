import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeadTitle = ({...props}) => {
  const {text} = props;
  return <View style={{flex: 1}}>
           <Text style={styles.contentHeadline}>{text}</Text>
         </View>
};

// fontFamily: 'JosefinSans-Bold'

const styles = StyleSheet.create({
  contentHeadline: {
    fontSize: 28,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: '#B5B6D9'
  }
});


export default HeadTitle;
