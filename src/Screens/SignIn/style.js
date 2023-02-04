import baseColors from "../../Theme/Colors/Colors";
import { StyleSheet , Dimensions } from "react-native";
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
    screenTop: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingVertical: 40,
    },
    screenMid: {
      flexDirection: "column",
      justifyContent: "center",
      paddingVertical: 20,
      // flex: 1,
    },
    LoginBtn: {
      flexDirection: "column",
      justifyContent: "center",
      width: 130,
      margin: "auto",
    },
    TextSty: {
      paddingLeft: 11,
      fontWeight: 600,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
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
      alignItems: "center"
    }
});
export default styles;