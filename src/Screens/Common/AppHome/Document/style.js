import { Dimensions, StyleSheet} from "react-native"
import baseColors from "../../../../Theme/Colors/Colors";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        width: deviceWidth / 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
})
export default styles