import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Dimensions, Text, ScrollView } from 'react-native'
import AppHeader from "../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import baseColors from '../../../Theme/Colors/Colors';
import AvaialblePlanCard from '../../../Components/Cards/AvaialblePlanCard';
import DarkGradient from '../../../Components/Gradient/DarkGradient';

const deviceWidth = Dimensions.get("window").width;

export default function AvaialblePlan() {
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
                                width: deviceWidth / 3,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity>
                                <Ionicons
                                    onPress={() => {
                                        navigation.goBack("Assurances")
                                    }}
                                    name="chevron-back-sharp"
                                    size={45}
                                    style={{ color: baseColors.lightTextColor, justifyContent: 'center', alignItems: 'center' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                // width: deviceWidth / 3,
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={styles.textHeading}>Assurances</Text>
                        </View>
                    </View>
                </AppHeader>
            </View>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        marginBottom: 150
                    }}
                >
                    <View style={styles.screenMiddle}>

                        <View style={{
                            flexDirection: 'column'
                        }}>
                            <Text style={{ paddingHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Avaialble Plans</Text>
                            <AvaialblePlanCard onPress={() => {
                                navigation.navigate("AssurancesAbout")
                            }}>
                                <View style={{ height: 80, }}>
                                    <DarkGradient
                                        styles={{
                                            elevation: 8,
                                            backgroundColor: baseColors.primaryColor,
                                            borderRadius: 50,
                                            paddingVertical: 10,
                                            marginVertical: 10,
                                            width: deviceWidth / 1 - 60,
                                            marginHorizontal: 15,
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Text
                                            onPress={() => {
                                                navigation.navigate("MedicalHistory")
                                            }}

                                            style={{
                                                color: "#fff",
                                                fontSize: 20
                                            }}>Subscribe Now</Text>
                                    </DarkGradient>
                                </View>
                            </AvaialblePlanCard>
                            <AvaialblePlanCard onPress={() => {
                                navigation.navigate("AssurancesAbout")
                            }}>
                                <View style={{ height: 80, }}>
                                    <DarkGradient
                                        styles={{
                                            elevation: 8,
                                            backgroundColor: baseColors.primaryColor,
                                            borderRadius: 50,
                                            paddingVertical: 10,
                                            marginVertical: 10,
                                            width: deviceWidth / 1 - 60,
                                            marginHorizontal: 15,
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Text
                                            onPress={() => {
                                                navigation.navigate("MedicalHistory")
                                            }}

                                            style={{
                                                color: "#fff",
                                                fontSize: 20
                                            }}>Subscribe Now</Text>
                                    </DarkGradient>
                                </View>
                            </AvaialblePlanCard>
                            <AvaialblePlanCard onPress={() => {
                                navigation.navigate("AssurancesAbout")
                            }}>
                                <View style={{ height: 80, }}>
                                    <DarkGradient
                                        styles={{
                                            elevation: 8,
                                            backgroundColor: baseColors.primaryColor,
                                            borderRadius: 50,
                                            paddingVertical: 10,
                                            marginVertical: 10,
                                            width: deviceWidth / 1 - 60,
                                            marginHorizontal: 15,
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Text
                                            onPress={() => {
                                                navigation.navigate("MedicalHistory")
                                            }}

                                            style={{
                                                color: "#fff",
                                                fontSize: 20
                                            }}>Subscribe Now</Text>
                                    </DarkGradient>
                                </View>
                            </AvaialblePlanCard>
                        </View>


                    </View>
                </View>
            </ScrollView>
        </View>
    )
}