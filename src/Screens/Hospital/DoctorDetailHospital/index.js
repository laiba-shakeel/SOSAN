import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Theme/Colors/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import SkipSwitchReverseButton from "../../../Components/SkipSwitchReverseButton"
import Button from "../../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function DoctorDetailHospital() {
  const Navigation = useNavigation();
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View style={styles.Headeritems}>
            <Text style={styles.HeaderText}>Skip</Text>
            <AntDesign
              name="doubleright"
              size={22}
              style={{ color: baseColors.primaryTextColor }}
            />
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}

      <View style={styles.screenMiddle}>
        <View>
          <SkipSwitchReverseButton />
        </View>
      <View style={{marginTop:150}}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            height: 100,
            width:deviceWidth/1-50,
            backgroundColor: baseColors.lightColor,
            elevation: 4, 
            // borderWidth:1
          }}
        >
          <MaterialIcons name="person-add-alt-1" size={24} color="black" />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: baseColors.secondaryTextColor,
            }}
            onPress={() => {
              Navigation.navigate("AddANewDoctorHospital");
            }}
          >
            Add New Staff
          </Text>
        </View>
      </View>
       

      </View>
      <View
          style={{
            height: 60,
            flexDirection: "column",
            justifyContent: "flex-end",
            marginTop: 10,
          }}
        >
          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.navigate("HospitalityAppHome");
            }}
          >
            <Text style={styles.ButtonText}
            onPress={() => {
              Navigation.navigate("HospitalityAppHome");
            }}>Continue</Text>
          </Button>
        </View>
    </ScrollView>
  );
}

export default DoctorDetailHospital;