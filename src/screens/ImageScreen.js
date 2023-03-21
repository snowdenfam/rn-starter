import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return ( 
  <View>
<ImageDetail 
title="Forest" 
imageScore="Image score - 9"
imageSource={require('../../assets/forest.jpg')} 
   />
<ImageDetail
 title="Beach"
 imageScore="Image score - 7"
  imageSource={require('../../assets/beach.jpg')} 
 />
 <ImageDetail
  title="Mountain"
  imageScore="Image score - 4" 
  imageSource={require('../../assets/mountain.jpg')} 
 />

   </View>
);
};

const styles = StyleSheet.create ({});

export default ImageScreen;