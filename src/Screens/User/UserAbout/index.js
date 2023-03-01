import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Dimensions, Text, ScrollView, ImageBackground } from 'react-native'
import AppHeader from "../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import baseColors from '../../../Theme/Colors/Colors';
import AppointmentAccountID from '../../../Components/Cards/AppointmentID';
import { bluebtn } from '../../../Assets/Images/index'
const deviceWidth = Dimensions.get("window").width;
export default function UserAbout() {
    const navigation = useNavigation();
    return (
        <View style={styles.screenContainer}>
            <View>
                <AppHeader styles={styles.headerContainer}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingVertical: 5,

                        }}
                    >
                        <View
                            style={{
                                width: deviceWidth / 4,
                                flexDirection: "row",
                                justifyContent: "flex-start",

                            }}
                        >
                            <TouchableOpacity>
                                <Ionicons
                                    onPress={() => {
                                        navigation.goBack("AvailblePlan")
                                    }}
                                    name="chevron-back-sharp"
                                    size={37}
                                    style={{ color: baseColors.lightTextColor, justifyContent: 'center', alignItems: 'center' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: deviceWidth / 2,
                                flexDirection: "row",
                                justifyContent: "center",

                            }}
                        >
                            <Text style={styles.textHeading}>About</Text>
                        </View>
                        <View
                            style={{
                                width: deviceWidth / 5,
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <AntDesign
                                name="exclamationcircleo"
                                size={20}
                                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
                            />
                        </View>
                    </View>
                </AppHeader>
            </View>

            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 10,

                }}
            >
                <View style={styles.screenMiddle}>

                    <View style={{
                        flexDirection: 'column'
                    }}>
                        <View>
                            <AppointmentAccountID />

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 55, width: deviceWidth / 1 - 20, }}>
                            <ImageBackground resizeMode='cover' source={bluebtn} style={{ height: 30, width: 120, }} ><Text style={{ color: '#fff', fontSize: 14, paddingHorizontal: 10, paddingVertical: 5 }}>25 years</Text></ImageBackground>
                            <TouchableOpacity
                                style={{
                                    elevation: 8,
                                    backgroundColor: baseColors.sucessColor,
                                    borderRadius: 5,
                                    width: 140,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 30,
                                    marginVertical: 20,
                                }}
                            >
                                <Text
                                    style={{
                                        color: baseColors.lightTextColor,
                                        flexDirection: "column",
                                        textAlign: "center",
                                        fontSize: 14,
                                    }}
                                >
                                    Per month $50
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, paddingHorizontal: 15, }}>Insurance Nmae</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // height: 40,
                            paddingBottom: 5
                        }}>
                            <View style={{ flexDirection: 'column', marginTop: 5, }}>
                                <Text style={{ fontSize: 13.5, paddingHorizontal: 15, color: "gray" }} >
                                    Health Coverage of 80%
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 2, paddingVertical: 10, marginTop: 20, width: deviceWidth / 1 - 30, marginHorizontal: 10 , backgroundColor:baseColors.lightColor , elevation: 6 , borderColor: baseColors.lightColor}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{
                                        fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'
                                    }}>Total Fee</Text>
                                    <Text style={{ fontSize: 13.5, paddingHorizontal: 15, color: "gray" }} >Fee of the month</Text>
                                </View>
                                <View style={{ flexDirection: 'column', paddingHorizontal: 15, paddingVertical: 15 }}>
                                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>$80</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}