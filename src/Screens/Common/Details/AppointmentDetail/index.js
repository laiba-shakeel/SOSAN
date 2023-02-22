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
import { AppointmentCardData } from "../../../../Config/Data/index";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';
import baseColors from "../../../../Theme/Colors/Colors";
import { useNavigation } from "@react-navigation/native";
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
                                width: deviceWidth / 3,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", color: baseColors.lightTextColor, fontSize: 20 }}
                            >
                                Appointment
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
                <ScrollView>
                    <View style={styles.screenMiddle}>


                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AppointmentDetail
