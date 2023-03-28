import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  return <View>
   <TextInput style={styles.input}/>
  </View>
};

const styles = StyleSheet.create ({
  input: {
    margin: 15,
    borderColor: 'black',
    borderwidth: 1
  }

});

export default TextScreen;