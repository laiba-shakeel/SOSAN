import React from "react";
import { View, Text, ScrollView, Dimensions , FlatList } from "react-native";
import GradientBackground from "../../../../Components/Gradient/Background";
import AppHeader from "../../../../Components/AppHeader";
import SearchField from "../../../../Components/SearchField";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AppointmentCardData } from '../../../../Config/Data';
import styles from "./style.js"
import baseColors from "../../../../Theme/Colors/Colors";

import AppointmentCard from "../../../../Components/Cards/AppointmentCard";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
function Appointments() {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline', marginHorizontal: 10 }}>
              <Ionicons onPress={() => {
                navigation.goBack("Feed");
              }} name="chevron-back" size={35} color="#fff" />
              <Text style={styles.HeadingText}>Appointment</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{
                  fontSize: 12,
                  paddingEnd: 5,
                  color: baseColors.lightColor
                }}>Today</Text>
                <Ionicons name="menu-outline" size={20} color="black" />
              </View>
            </View>
            <View>
              <SearchField placeholder="search for message" styles={styles.SearchField} />
            </View>
          </GradientBackground>
        </AppHeader>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.screenMiddle}>
     
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            flexDirection: 'column',
            width: deviceWidth / 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FlatList
              data={AppointmentCardData}
              renderItem={({ item }) => <AppointmentCard data={item} />
              }
            />
          </View>
        </View>
      </View>
      </View>
        
      </ScrollView>
      </View>
  );
}

export default Appointments