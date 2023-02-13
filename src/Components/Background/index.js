import React from "react";
import { View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import baseColors from "../../Theme/Colors/Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Background({ children }) {
  return (
    <View>
      <LinearGradient
        colors={[baseColors.gradientsucessColor, baseColors.gradientprimaryColor, baseColors.primaryColor]}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0.5,
        }}
        locations={[0.1, 0.7,0.9]}
        
        style={{
          position: "absolute",
          flex: 1,
          width: deviceWidth / 1,
          height: deviceHeight / 1,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

export default Background;

