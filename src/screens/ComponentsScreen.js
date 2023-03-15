import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  
  // you cannot show a javascript object inside of a text element. For example const greeting = { color: 'red' }; wont show inside <Text>{greeting}</Text> ////

  return (
  <View><Text style={styles.textStyle}>This is the components screen. Wow, so many things can go wrong</Text>
  <Text>{greeting}</Text>
  </View> );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
