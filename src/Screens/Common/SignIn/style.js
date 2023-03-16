import baseColors from "../../../Theme/Colors/Colors";
import { StyleSheet , Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    screenContainer: {
      height: deviceHeight / 1,
      width: deviceWidth / 1,
      flex: 1,
      flexDirection: "column",
      padding: 10,
      backgroundColor: baseColors.lightColor,
      paddingVertical:10, 
      // borderWidth:2
    },
    screenTop: {
      flexDirection: "row",
      justifyContent: "flex-end",
      // paddingVertical: 40,
      // borderWidth:1, 
      borderColor: "blue", 
      marginTop: 40
    },
    screenMid: {
      flexDirection: "column",
      justifyContent: "center",
      paddingVertical: 20,
      // borderWidth:1
      // flex: 1,
    },
    LoginBtn: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 6,
    },
    TextSty: {
      flexDirection:'row',
      width:deviceWidth / 1 - 70,
      fontSize:16,
      // borderWidth:1, 
marginHorizontal:20, 
fontWeight:'350'
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderWidth:1
    },
    image: {
      flex: 1,
      width: "100%",
      backgroundColor: "#0553",
    },
    textColorSuccess: {
      color: baseColors.sucessTextColor,
    },
    textColorDanger: {
      color: baseColors.dangerTextColor,
    },
    OptionScreen: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical:10
    }
});
export default styles;