import baseColors from "../../Theme/Colors/Colors";
import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const style = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    paddingTop: 38,
    backgroundColor: baseColors.lightColor,
  },
  screenBackground: {
    backgroundColor: baseColors.darkColor,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  middleScreen: {
    height: deviceHeight / 1.2,
    width: deviceWidth / 1,
    borderRadius: 30,
    backgroundColor: baseColors.lightColor,
    paddingTop: 30,
  },
  heading:{
    color: baseColors.darkTextColor,
      justifyContent: "center",
      textAlign: "center",
      fontSize: 20,
  }
});
export default style;
