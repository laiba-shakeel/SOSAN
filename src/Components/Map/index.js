import React from 'react'
import { View, Text, Image,StyleSheet } from "react-native";
import { map } from "../../Assets/Images/index";
import baseColors from "../../Theme/Colors/Colors";

function Map() {
  return (
    <View>
    <Text style={styles.MapText}>Enter Your location</Text>
        <View style={styles.Map}>
          <Image
            source={map}
            style={styles.MapImage}
          />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    MapText: {
        paddingLeft: 20,
        color: baseColors.secondaryTextColor,
      },
      Map: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
      },
      MapImage: {
        height: 200,
        width: 300,
        borderRadius: 15,
      },
  });
export default Map