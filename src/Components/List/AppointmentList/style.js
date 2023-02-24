import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../Theme/Colors/Colors';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: deviceWidth / 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    List: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: deviceWidth / 1,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: baseColors.darkTextColor,
        paddingVertical: 10,
        padding: 25
    },
    ListItems: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
})