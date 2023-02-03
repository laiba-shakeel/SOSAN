import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import baseColors from '../../Theme/Colors/Colors';

const TextInputField = ({placeholder , keyboardType , secureTextEntry}) => {
 
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
     
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 50,
      borderColor: baseColors.sucessTextColor,
    },
  });

export default TextInputField;
