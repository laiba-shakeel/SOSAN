import {StyleSheet, Dimensions } from 'react-native'
import baseColors from '../../Theme/Colors/Colors'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screenContainer: {
        height: deviceHeight / 1,
        width: deviceWidth / 1,
        flex: 1,
        flexDirection: "column",
        padding: 20,
        backgroundColor: baseColors.lightColor,
      },
      Text:{
        color: baseColors.darkTextColor,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        paddingVertical:10
      },
      imageStyle:{
        paddingVertical:15,
        justifyContent: "center",
        alignItems: "center",
      },
      image:{ 
        height:180,
        width:180
      },
      screen: {
        flexDirection: "column",
        justifyContent: "center",
        paddingVertical: 30,
      },
      formText: {
        paddingLeft: 20,
      },
      InputField: {
        height: 40,
        margin: 12,
        borderColor: baseColors.sucessColor,
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
      },
      InputFieldAbout: {
        margin: 12,
        borderColor: baseColors.sucessColor,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: "top",
      },
      Button: {
        elevation: 5,
        backgroundColor: baseColors.primaryColor,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30,
        marginVertical:10,
        width: deviceWidth / 1 - 50,
        justifyContent: "center",
        alignItems: "center",
      },
      ButtonText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
      },
   
  
  });
  export default styles;