import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../Theme/Colors/Colors';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        width: deviceWidth / 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    CardStyling: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        paddingVertical: 10,
        marginVertical: 5,
        elevation: 3,
        borderWidth: 1,
        borderColor: baseColors.LightSecondaryColor
    },
    item: {
        alignItems: 'center',
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        paddingVertical:4,
    },
    TitleHead: {
        flexDirection: "column"
    },
    title: {
        fontWeight: 'bold',
    },
    ItemDisc: {
        flexDirection: "row",
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    ButtonView: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    ButtonSucess: {
        elevation: 0,
        backgroundColor: baseColors.sucessColor,
        width: 70,
        height: 27,
        borderRadius: 5,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        color: baseColors.lightColor,
    },
    ButtonText: {
        color: baseColors.lightTextColor,
    },
    ButtonReject: {
        elevation: 0,
        backgroundColor: baseColors.dangerTextColor,
        width: 70,
        height: 27,
        borderRadius: 5,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        color: baseColors.lightColor,
    },
    iconsSty:{
        flexDirection:'column',
       
    }
});