import React from "react";
import { View, TouchableOpacity, Dimensions, Text, Image, ScrollView } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { styles } from "./style";
import baseColors from "../../../../Theme/Colors/Colors";
import Switch from "../../../../Components/SwitchSelector/RequestAndObjection";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchField from "../../../../Components/SearchField"
import { AntDesign } from "@expo/vector-icons";
import ReportCard from "../../../../Components/Cards/ReportCard";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Document = () => {
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
              // justifyContent:'center'
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
                    navigation.goBack("SignIn");
                  }}
                  name="chevron-back-sharp"
                  size={37}
                  style={{
                    color: baseColors.lightTextColor,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
              <Text style={styles.textHeading}>Request</Text>
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
        }}
      >
        <View style={styles.screenMiddle}>
       
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 10, 
              marginVertical: 20,
            //   borderWidth:1,
              alignItems:'center'
            }}
          >
             <Text> <Switch />  </Text>
             <View>
                <SearchField
                  placeholder="Search"
                  styles={{
                    width: deviceWidth / 1 - 40,
                    height: 55,
                    borderRadius: 20,
                    elevation: 2,
                    marginHorizontal: 15,
                    marginVertical: 15,
                    backgroundColor: baseColors.lightColor,
                    color: baseColors.lightGreyColor,
                  }}
                />
              </View>
              <View>
                <ReportCard/>
              </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Document;
