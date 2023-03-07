import React from 'react'
import { View, Dimensions, Text } from 'react-native'
const deviceWidth = Dimensions.get("window").width;
import { MaterialIcons } from '@expo/vector-icons';
import baseColors from '../../../Theme/Colors/Colors';
export default function TestList() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: deviceWidth / 1 -50, marginHorizontal:10 , borderBottomWidth:1, borderBottomColor: baseColors.lightGreyColor }}>

            <View style={{ flexDirection: 'column', paddingVertical: 5 }}>
                <Text style={{
                    paddingBottom: 1,
                    margin: 3
                }}>lorem Spam</Text>
                <Text style={{
                    paddingBottom: 1,
                    margin: 3
                }}>lorem Spam</Text>
            </View>
            <View style={{ flexDirection: 'column', paddingVertical: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="attachment" size={24} color="black" />
                    <Text style={{
                        paddingBottom: 1,
                        margin: 3
                    }}>

                        View Report</Text></View>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="attachment" size={24} color="black" />
                    <Text style={{
                        paddingBottom: 1,
                        margin: 3
                    }}>

                        View Report</Text></View>
            </View>
        </View>
    )
}
