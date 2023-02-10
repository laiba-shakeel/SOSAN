import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../Theme/Colors/Colors";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  MainConatiner: {
    borderColor: baseColors.lightColor,
    flexDirection: "column",
    width: deviceWidth / 1 - 40,
    paddingVertical: 10
  },
  TopImg:{
    justifyContent:"center",
    alignItems: "center",
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
    justifyContent: "space-evenly",
    marginVertical: 10,
    alignItems:"center"
  },
  ImgSty: {
    borderRadius: 5,
    height: 80,
    width: 90,
  },
  ColumnImg:{
    height: 150,
    borderRadius: 10,
    width: 300,
    resizeMode: "cover",
  }
});