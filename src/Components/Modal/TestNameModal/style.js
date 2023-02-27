import { StyleSheet, Dimensions } from 'react-native'
import baseColors from '../../../Theme/Colors/Colors'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({

    Text: {
        color: baseColors.darkTextColor,
        fontWeight: "bold",
        // textAlign: "center",
        fontSize: 20,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    modal: {
        backgroundColor: baseColors.lightColor,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: baseColors.sucessColor,

    },
    modalView: {
        flexDirection: 'column',
        backgroundColor: baseColors.lightColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth / 1.1,
        height: deviceHeight / 3,
        paddingVertical: 10,
        borderRadius: 30,
    },
    modalViewText: {
        color: baseColors.darkTextColor,

    },
    ImgView: {
        borderWidth: 1,
        borderColor: baseColors.sucessColor,
        borderRadius: 100,
        height: 130,
        width: 120,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },
    ImgViewLittle: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: baseColors.primaryMiddleColor,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ImageStyling: {
        height: 60,
        width: 70,
        marginBottom: 10,
    },
    modalIcon: {
        color: baseColors.primaryColor,
    },
    ButtonText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    LoginBtn: {
        elevation: 8,
        backgroundColor: baseColors.primaryColor,
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 20,
        width: deviceWidth / 1 - 90,
        justifyContent: "center",
        alignItems: "center",
    },
    LoginTextSty: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    },
    ImgText: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 20,
        color: baseColors.primaryColor
    }
});