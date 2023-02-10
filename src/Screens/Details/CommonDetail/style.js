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
    padding: 20,
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
  },
  screenTop: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 20,
  },
  formText: {
    paddingLeft: 20,
  },
  ScreenMap: {
    border: "2px",
    borderColor: baseColors.dangerTextColor,
    height: 100,
    width: 60,
  },
  lightText: {
    color: "#d3d3d3",
    fontSize: 14,
    paddingBottom: 10,
  },
  Mapping: {
    justifyContent: "center",
    marginVertical: 5,
  },
  TextPrimary: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
    color: baseColors.primaryTextColor,
  },
  InputStyling: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  AboutSty: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  WebText: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  WebAbout: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    width: deviceWidth / 1 - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ImgSty:{
     height: 200 
  },
  LoginTextSty:{
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  }
});
