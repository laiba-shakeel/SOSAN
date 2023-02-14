import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,

} from "react-native";
import AppHeader from "../../../Components/AppHeader";
import baseColors from "../../../Theme/Colors/Colors";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const Document = () => {
  return (
    <View style={styles.MainContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            backgroundColor: baseColors.sucessColor,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7
          }}>
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text style={{ fontWeight: 'bold', color: baseColors.lightTextColor }}>Notification</Text>
          </View>
        </View>
      </AppHeader>
      <View style={styles.ListItem}>
       
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  MainContainer:{
    height: deviceHeight / 1,
    flex: 1,
    flexDirection: "column",
    border: 1,
    borderColor: "#000"
  },
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 50,
    marginTop: 35,
    width: deviceWidth / 1,
  },
ListItem:{
  flexDirection: "column"
}
});

export default Document;