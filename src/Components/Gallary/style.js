import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../Theme/Colors/Colors";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  MainConatiner: {
    borderColor: baseColors.lightColor,
    flexDirection: "column",
    width: deviceWidth / 1 - 60,
    justifyContent: "center",
  },
  TextSty: {
    fontWeight: "600",
    marginVertical: 5,
  },
  TextStyle: {
    fontSize: 12,
    color: "#d3d3d3",
    textAlign: "center",
    marginVertical: 5,
  },
  RowImages: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  ImgSty: {
    borderRadius: 5,
    height: 90,
    width: 100,
  },
});
