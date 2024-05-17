import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, TextInput} from 'react-native'

export const LoginView = () => {

  const windowDimensions = Dimensions.get('window');
  const width = windowDimensions.width;
  const height = windowDimensions.height;
  
  return(
    <View testID='LoginView' style={{height: height, width: width}}>
      TEST
    </View>
  )
}