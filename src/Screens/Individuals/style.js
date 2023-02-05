import baseColors from "../../Theme/Colors/Colors"
import { Dimensions , StyleSheet } from "react-native"
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    screenContainer: {
      height: deviceHeight / 1,
      width: deviceWidth / 1,
      flex: 1,
      flexDirection: "column",
      paddingTop: 38,
      backgroundColor: baseColors.lightColor,
    },
    screenBackground: {
      backgroundColor: baseColors.primaryColor,
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
      justifyContent: "center",
      paddingHorizontal: 15,
    },
    heading: {
      fontWeight: "600",
      color: baseColors.darkTextColor,
      justifyContent: "center",
      textAlign: "center",
      fontSize: 16
    }, 

})
export default styles