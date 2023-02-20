import React from "react";
import { View, Text, ScrollView } from "react-native";
import GradientBackground from "../../../../Components/Background";
import AppHeader from "../../../../Components/AppHeader";
import SearchField from "../../../../Components/SearchField";
import styles from "./style.js"

function CancelledAppointment() {
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>
            <View>
              <Text style={styles.HeadingText}>Chat</Text>
            </View>
            <View>
              <SearchField placeholder="Search" styles={styles.SearchField} />
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
       {/* <CancelledAppointmentCard /> */}
        </View>
        
      </View>
      
      </ScrollView>
    </View>
  );
}

export default CancelledAppointment;