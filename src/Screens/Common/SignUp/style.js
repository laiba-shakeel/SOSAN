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
    paddingTop: 26,
    backgroundColor: baseColors.lightColor,
    borderWidth:1
  },
  screenBackground: {
    // backgroundColor: baseColors.primaryColor ,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    justifyContent: "center",
    // borderWidth:1
  },
  screenMiddle: {
    height: deviceHeight / 1.15,
    // width: deviceWidth / 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: baseColors.lightColor,
    // borderWidth:1, 
    marginBottom:80
  },
  headerContainer: {
    width: deviceWidth / 1 - 30,
    //  borderWidth:1,
    // marginTop: 30,
    marginHorizontal: 15,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  textHeading: {
    color: baseColors.lightTextColor,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    // borderWidth:1,
    width: deviceWidth / 1.5,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingTop:20
  },
  TextSty: {
    flexDirection:'row',
    width:deviceWidth / 1 - 70,
    fontSize:16,
    // borderWidth:1, 
marginHorizontal:20, 
fontWeight:'350'
  },
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
    fontSize:16
  },
  Textleft: {
    color: baseColors.darkTextColor,
    flexDirection:'row',
    width:deviceWidth / 1 - 70,
    fontSize:18,
    fontWeight: "600", 
marginHorizontal:20,
  },
  formText: {
    paddingLeft: 20,
  },
  modalView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
  },
  modalButton: {
    // flex: 1,
    // flexDirection:'row',
  },
});