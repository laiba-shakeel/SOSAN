import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import AppHeader from "../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import baseColors from "../../../Theme/Colors/Colors";
import Calender from "../../../Components/Calender";
import SearchField from "../../../Components/SearchField";
import ReportCard from "../../../Components/Cards/ReportCard";
const deviceWidth = Dimensions.get("window").width;
export default function AssuranceAgenda() {
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
                    navigation.goBack("AssurancesAbout");
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
                width: deviceWidth / 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textHeading}>Reports</Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            ></View>
          </View>
        </AppHeader>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              }}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: baseColors.lightGreyColor,
                }}
              >
                <Calender />
              </View>
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
              <View style={{ width: deviceWidth / 2, alignItems: "center" }}>
                <Text style={styles.textHeading}>List of client</Text>
              </View>
              <View>
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}