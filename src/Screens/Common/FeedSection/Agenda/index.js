import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { ListOfSchedule } from "../../../../Config/Data/index";
import Button from "../../../../Components/Buttons/index";
import { styles } from "./style";
import baseColors from "../../../../Theme/Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Calender from "../../../../Components/Calender";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Agenda = () => {
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
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack("Feed");
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
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor , fontSize: 20}}
              >
                Consultation
              </Text>
            </View>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
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
            <Calender />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "flex-start",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack("Feed");
                }}
                style={{
                  elevation: 8,
                  backgroundColor: "#ADD8E6",
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Sun 10
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack("Feed");
                }}
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Mon 11
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Tue 12
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Wed 13
                </Text>
              </TouchableOpacity>
            </View>
          {/* {Card Wrok} */}
            <View style={{flexDirection:'row',}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>List of Schedule</Text>
            </View>
            <View style={{
              flexDirection:'row',
              alignItems:'flex-end',
              justifyContent:'flex-end',
              width: deviceWidth / 1 - 30,
            }}>
            <TouchableOpacity 
             onPress={() => {
              navigation.navigate("WorkingDetail");
            }}
            style={{
              elevation: 8,
              backgroundColor: baseColors.sucessColor,
              borderRadius: 50,
              paddingVertical: 10,
              // paddingHorizontal: 12,
              width: 80,
              justifyContent: "center",
              alignItems: "center",
              height:80,
              // marginVertical: 20,
            }}>
              <MaterialIcons name="add" size={60} color="black" />
            </TouchableOpacity>
            </View>
            
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Agenda;