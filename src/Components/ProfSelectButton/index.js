import React from 'react'
import {TouchableOpacity , StyleSheet , Text } from 'react-native'
import baseColors from '../../Theme/Colors/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import _ from "lodash"
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const ProfButton = ({ onPress, children , styles:customStyle , TextStyle:customStyleText , IconSet:customStyleIcon }) => {
  
  // for button container styling 
  let styles = defaultStyles.appButtonContainer;
  if(!_.isEmpty(customStyle)){
    styles = {styles , ...customStyle};
  }
  // for button icon setting 
let IconSet = defaultStyles.iconSty;
if(!_.isEmpty(customStyleIcon)) {
    IconSet = {IconSet , ...customStyleIcon};
}

  // for text styling 
  let TextStyle = defaultStyles.appButtonText;
  if(!_.isEmpty(customStyleText)){
    TextStyle = {TextStyle , ...customStyleText};
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles}>
       <Ionicons name='md-checkmark-circle' size={32} color='green' />
     <Text style={styles.appButtonText}>{children}</Text>
     </TouchableOpacity>
  )
}
export default ProfButton

const defaultStyles = StyleSheet.create({

    appButtonContainer: {
      elevation: 8,
      backgroundColor: baseColors.primaryColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 200,
      justifyContent:"center",
      alignItems: "center"
     
    },
    appButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "100",
      alignSelf: "center",
      textTransform: "uppercase",
      borderRadius: 50
    }, 

  });