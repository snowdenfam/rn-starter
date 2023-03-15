import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  const greeting3 = 'Andre Snowden';

  // you cannot show a javascript object inside of a text element. For example const greeting = { color: 'red' }; wont show inside <Text>{greeting}</Text> ////

  return (
  <View><Text style={styles1.textStyle}>Getting started with React Native!</Text>



  <Text style={styles3.textStyle}>My name is {greeting3}</Text>
  </View> );
};

////// This is how you style a text element that also has a variable in it with React Native //////////

// Styling for text // 

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

const styles1 = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

const styles3 = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
