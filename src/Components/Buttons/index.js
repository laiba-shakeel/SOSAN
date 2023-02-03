import React from 'react'
import {TouchableOpacity , StyleSheet , Text } from 'react-native'
import baseColors from '../../Theme/Colors/Colors'
import _ from "lodash"
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const TouchableButton = ({ onPress, children , styles:customStyle , TextStyle:customStyleText }) => {
  
  // for button container styling 
  let styles = defaultStyles.appButtonContainer;
  if(!_.isEmpty(customStyle)){
    styles = {styles , ...customStyle};
  }
  // for text styling 
  let TextStyle = defaultStyles.appButtonText;
  if(!_.isEmpty(customStyleText)){
    TextStyle = {TextStyle , ...customStyleText};
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
      width: 200,
      justifyContent: "center"
     
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
