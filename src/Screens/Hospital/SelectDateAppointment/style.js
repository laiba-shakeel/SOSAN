import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../.././../Theme/Colors/Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    screenContainer: {
      width: deviceWidth / 1,
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#eff8f9",
    },
    headerContainer: {
      backgroundColor: baseColors.sucessColor,
      height: 60,
      marginTop: 35,
      width: deviceWidth / 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingVertical: 8,
      marginBottom: 3,
    },
  
    screenMiddle: {
      width: deviceWidth / 1,
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 100,
    },
    View: {
      flexDirection: "column",
      width: deviceWidth / 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      backgroundColor: baseColors.lightColor,
      marginBottom: 10,
    },
    ViewBottom: {
      flexDirection: "column",
      width: deviceWidth / 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 15,
      backgroundColor: baseColors.lightColor,
      elevation: 8,
    },
    ButtonPrimary: {
      elevation: 8,
      backgroundColor: baseColors.primaryColor,
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: deviceWidth / 1 - 40,
      marginVertical: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    ButtonTextPrimary: {
      color: baseColors.lightTextColor,
      fontWeight: "bold",
    },
    itemTop: {
      alignItems: "center",
      width: 300,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      borderRadius: 15,
      paddingVertical: 4,
      marginHorizontal: 10,
      width: deviceWidth / 1.1,
    },
    imgView: {
      flexDirection: "column",
    },
    imageSty: {
      height: 80,
      width: 80,
      borderRadius: 50,
    },
    listItem: {
      flexDirection: "column",
      width: deviceWidth / 2,
    },
    email: {
      fontSize: 14,
      color: "gray",
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      paddingVertical: 2,
    },
  
    icon: {
      paddingRight: 10,
      paddingTop: 5,
      color: baseColors.secondaryTextColor,
    },
    id: {
      color: "gray",
    },
    idView: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: deviceWidth / 2.5,
      paddingVertical: 2,
    },
    idViewTwo: {
      flexDirection: "row",
      justifyContent: "flex-start",
      width: deviceWidth / 2.5,
      paddingVertical: 2,
    },
    CardStyling: {
      backgroundColor: baseColors.lightColor,
      width: deviceWidth / 1 - 10,
      borderRadius: 15,
      paddingVertical: 10,
      marginVertical: 10,
      elevation: 3,
    },
    item: {
      alignItems: "flex-start",
      width: 300,
      flexDirection: "row",
      justifyContent: "space-around",
      width: deviceWidth / 1 - 10,
      borderRadius: 15,
      paddingVertical: 5,
    },
    TitleHead: {
      flexDirection: "column",
    },
    ItemDisc: {
      flexDirection: "row",
    },
    CalenderField: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 40,
      marginBottom: 12,
      borderColor: baseColors.sucessColor,
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 10,
      width: deviceWidth / 1 - 40,
    },
    HiddenShowView: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: deviceWidth / 1 - 10,
      backgroundColor: baseColors.lightColor,
      borderRadius: 15,
      elevation: 3,
      paddingVertical: 5,
      marginVertical: 5,
    },
    HiddenShowitems: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingVertical:5,
      width: deviceWidth / 1 - 60,
    },
  });