import baseColors from "../../../Theme/Colors/Colors";
import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    color: baseColors.darkTextColor,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 25,
    fontWeight: "600"
  },
  screenTop: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 20,
    // height: deviceHeight / 1,
  },
  Box:{
    borderWidth: 1,
    borderColor: baseColors.darkTextColor,
    borderRadius: 15,
  },
  TextSty: {
    fontWeight: "600",
    marginVertical: 10,
    marginHorizontal: 10
  },
  span:{
    flexDirection:"row",
    alignItems:"baseline"
  },
  TextSpan:{
    fontSize:18
  },
  BottomBtn:{
    height: deviceHeight / 1, 
    // borderWidth: 1, 
    marginVertical: 375,
    paddingVertical:10,
    backgroundColor: baseColors.lightColor,
    elevation: 6,
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius:20,
    paddingVertical: 10,
    // paddingHorizontal: 12,
    marginVertical: 10,
    width: deviceWidth / 1 - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginBtnTextSty: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },

});
export default styles;
