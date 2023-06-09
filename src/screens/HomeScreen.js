import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
  <Text style={styles.text}>Hi there!</Text>

  
  <Button 
   onPress={() => navigation.navigate('Components')}
  title="Go to Components Demo"
   />

  <Button
     title="Go to List Demo"
     onPress={() => navigation.navigate('List')}
   />

  <Button
     title="Go to Image Screen"
     onPress={() => navigation.navigate('Images')}
   />
    <Button
     title="Go to Counter Demo"
     onPress={() => navigation.navigate('Counter')}
   />
   <Button
     title="Go to Color Screen"
     onPress={() => navigation.navigate('Color')}
   />
   <Button
     title="Go to Square Screen"
     onPress={() => navigation.navigate('Square')}
   />
   <Button
     title="Go to Text Screen"
     onPress={() => navigation.navigate('Text')}
   />

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
