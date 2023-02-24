import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { ScheduledCardData } from "../../../../Config/Data/index";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';
import baseColors from "../../../../Theme/Colors/Colors";
import { useNavigation } from "@react-navigation/native";
import AppointmentAccount from '../../../../Components/Cards/AppointmentID'
import ScheduledCard from "../../../../Components/Cards/ScheduledCard";
import AppointmentList from '../../../../Components/List/AppointmentList'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const AppointmentDetail = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.screenContainer}>
            <View>
                <AppHeader styles={styles.headerContainer}>
                    <View
                        style={styles.FirstView}
                    >
                        <View
                            style={styles.SecondView}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack("Appointment");
                                }}
                            >
                                <Ionicons
                                    name="chevron-back-sharp"
                                    size={30}
                                    style={{ color: baseColors.lightTextColor }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                // width: deviceWidth / 3,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", color: baseColors.lightTextColor, fontSize: 20, textAlign: 'center' }}
                            >
                                Appointment Detail
                            </Text>
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
                <AppointmentAccount />
                <ScrollView>
                    <View style={styles.screenMiddle}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{
                                flexDirection: 'column',
                                width: deviceWidth / 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <FlatList
                                    data={ScheduledCardData}
                                    renderItem={({ item }) => <ScheduledCard data={item} />
                                    }
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.FollowTitle}>Following Up</Text>
                        <AppointmentList />
                        <Text style={styles.FollowTitle}>Text Report</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AppointmentDetail
