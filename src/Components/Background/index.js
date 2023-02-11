import * as React from 'react';
import {View , Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import baseColors from '../../Theme/Colors/Colors';
import { StyleSheet } from 'react-native';
export default function Background({children}) {

  return (
    <View style={styles.screenBackground}>
    <View
      style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 20,
        }}
      >{children}</LinearGradient>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    screenBackground: {
        backgroundColor: baseColors.primaryColor,
        height: deviceHeight / 1,
        width: deviceWidth / 1,
        flexDirection: "column",
        justifyContent: "center",
      },

})

