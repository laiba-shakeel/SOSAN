import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Theme/Colors/Colors";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    screenContainer: {
        height: deviceHeight / 1,
        width: deviceWidth / 1,
        flex: 1,
        flexDirection: "column",
        backgroundColor: baseColors.lightColor,
    },
    headerContainer: {
        backgroundColor: baseColors.lightColor,
        height: 60,
        marginTop: 40,
        width: deviceWidth / 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 8
    },
    LinearGradient: {
        borderColor: baseColors.lightColor,
        height: 170,
        height: deviceHeight / 4.5,
        width: deviceWidth / 1,
        borderBottomLeftRadius: 27,
        borderBottomRightRadius: 27
    },
    screenMiddle: {
        width: deviceWidth / 1 - 10,
        height: deviceHeight / 1,
        flexDirection: 'column',
        marginBottom: 50,
        // borderWidth:1

    },
    textHeading: {
        color: baseColors.darkColor,
        height: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    LoginBtn: {
        elevation: 8,
        backgroundColor: baseColors.primaryColor,
        borderRadius: 50,
        paddingVertical: 10,
        marginVertical: 10,
        width: deviceWidth / 1 - 60,
        marginHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    LoginTextSty: {
        color: "#fff",
        fontSize: 20
    },
    appViewContainer:{
        width: deviceWidth / 1,
        flexDirection: 'column',
        borderWidth: 1,
        backgroundColor: baseColors.sucessTextColor
    },
    title:{
        fontWeight: '500',
        fontSize: 18,
        paddingHorizontal:20,
        marginVertical:5
        },
        BlueText:{
            fontWeight: '500',
        fontSize: 16,
        paddingHorizontal:35,
        color: baseColors.primaryColor,
        marginVertical:5
        },
     IconText:{
        color: "gray",
        fontSize: 12,
        paddingLeft:5
     }
})