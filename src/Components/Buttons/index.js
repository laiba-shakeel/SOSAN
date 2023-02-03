import React from 'react'
import {TouchableOpacity , StyleSheet , Text } from 'react-native'
import baseColors from '../../Theme/Colors/Colors'
import _ from "lodash"
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const TouchableButton = ({ onPress, children , styles:customStyle }) => {
  let styles = defaultStyles.appButtonContainer;
  if(!_.isEmpty(customStyle)){
    styles = {styles , ...customStyle};
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
     <Text style={styles.appButtonText}>{children}</Text></TouchableOpacity>
  )
}
export default TouchableButton

const defaultStyles = StyleSheet.create({

    appButtonContainer: {
      elevation: 8,
      backgroundColor: baseColors.primaryColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
     
    },
    appButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      borderRadius: 50
    }
  });
