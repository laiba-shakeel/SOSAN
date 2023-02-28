import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import baseColors from "../../../Theme/Colors/Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function DarkGradient({ children, styles: customStyles, }) {

  let styles = defaultStyles.appButtonContainer;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }

  return (
    <View>
      <LinearGradient
        colors={[baseColors.sucessColor, baseColors.primaryColor, baseColors.primaryColor]}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0.5,
        }}
        locations={[0.1, 0.9, 0.9]}

        style={styles}
      >
        {children}
      </LinearGradient>
    </View>
  );
}
const defaultStyles = StyleSheet.create({
  LinearGradientContainer: {
    position: "absolute",
    flex: 1,
    width: deviceWidth / 1,
    height: deviceHeight / 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginVertical: 20
  },
});

export default DarkGradient;