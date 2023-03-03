import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../../Theme/Colors/Colors';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        paddingVertical: 5,
        elevation: 3,
        width: deviceWidth / 1 - 25,
    },
    item: {
        alignItems: 'center',
        width: deviceWidth / 1 - 50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // marginHorizontal: 5,
    },
    listItem: {
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'flex-start',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: baseColors.sucessColor,
        marginBottom: 10,
        marginHorizontal:35
    },
    TextSty: {
        width: deviceWidth / 1 ,
        // paddingVertical: 5,
    },
    idName: {
        fontSize: 16,
        borderBottomWidth: 1,
        // marginBottom: 10,
        color: "gray",
        borderBottomColor: "gray",
        flexDirection:'row',
        justifyContent:'space-around', 
        alignItems:'center'
    },
    draw:{
        flexDirection: 'row'
    }
})