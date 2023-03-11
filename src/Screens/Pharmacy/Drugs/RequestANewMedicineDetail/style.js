import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Theme/Colors/Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: baseColors.lightColor,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: baseColors.lightColor,
    width: deviceWidth / 1,
    height: 50,
  },

  imageStyle: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    height: 140,
    width: 140,
  },
  ImageButtonView: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent:'center',
    height: 130,
  },
  ImageButtonViewText: {
    width: 100,
    height: 35,
    paddingHorizontal:12,
    borderRadius:8,
    backgroundColor:baseColors.primaryColor,
    elevation:2
  },
  screen: {
    flexDirection: "column",
    height: deviceHeight / 1,
  },
  formText: {
    paddingLeft: 20,
  },
  InputField: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  InputFieldAbout: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  Button: {
    elevation: 5,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    marginVertical: 10,
    width: deviceWidth / 1 - 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});