import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Theme/Colors/Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
  },
  headerContainer:{ 
    backgroundColor:baseColors.sucessColor,
    height: 60, 
    marginTop: 35, 
    width: deviceWidth/1,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    paddingVertical:8
},
LinearGradient: {
    
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius:27,
    borderBottomRightRadius:27
  },
  

  screenMiddle: {
  
    width: deviceWidth / 1-10,
    height: deviceHeight / 1,
    flexDirection:'column',
    // paddingVertical:10,
    // borderWidth: 2
  
  },
  textHeading:{
    color: baseColors.lightColor,
    height:30,
    fontSize : 20,
    fontWeight: 'bold'
  },
})