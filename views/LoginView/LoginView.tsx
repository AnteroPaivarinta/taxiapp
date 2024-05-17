import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, TextInput, TextInputChangeEventData, NativeSyntheticEvent} from 'react-native'

export const LoginView = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const windowDimensions = Dimensions.get('window');
  const width = windowDimensions.width;
  const height = windowDimensions.height;

  const handleEmail = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = value.nativeEvent.text;
    setEmail(text);
  }

  const handlePassword = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = value.nativeEvent.text;
    setPassword(text);
  }
  
  return(
    <View testID="LoginView" style={{height: height, width: width}}>
      <TextInput value={email} placeholder='Sähköposti' onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleEmail(e) }></TextInput>
      <TextInput value={password}  placeholder='Salasana' onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handlePassword(e) }></TextInput>
    </View>
  )
}