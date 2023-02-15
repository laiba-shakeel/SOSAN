import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
 
} from "react-native";
import AppHeader from "../../../Components/AppHeader";
import baseColors from "../../../Theme/Colors/Colors";
import RequestCard from "../../../Components/Cards/RequestCard";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const Document = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center",
            paddingVertical: 15,
            backgroundColor:baseColors.sucessColor,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7
          }}>
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text style={{fontWeight: 'bold', color: baseColors.lightTextColor }}>Appoinment</Text>
          </View>
        </View>
      </AppHeader>
 <RequestCard/>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 50,
    marginTop: 35,
    width: deviceWidth / 1,
  },
});

export default Document;
