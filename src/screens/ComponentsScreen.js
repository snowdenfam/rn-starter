import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
  <View><Text style={styles.textStyle}>This is the components screen. Wow, so many things can go wrong</Text>
  <Text>Hi There</Text>
  </View> );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
