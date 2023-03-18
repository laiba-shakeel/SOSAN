import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import baseColors from "../../Theme/Colors/Colors";
import _ from 'lodash'
const TextInputField = ({ placeholder, keyboardType, secureTextEntry, styles: customStyles,multiline, numberOfLines, maxLength , placeholderTextColor  }) => {
  const [number, onChangeNumber] = React.useState("");
  let styles = defaultStyles.appButtonContainer;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }
  return (
    <SafeAreaView>
      <TextInput 
      maxLength={1}
        placeholderTextColor={placeholderTextColor}
        style={styles}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </SafeAreaView>
  );
};

const defaultStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: baseColors.sucessTextColor,
    textAlignVertical: "top",
    fontSize:20,
    paddingStart: 10,
    textAlign:'center'
    
  },
});

export default TextInputField;
