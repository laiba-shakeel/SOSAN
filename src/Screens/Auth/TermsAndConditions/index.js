import React from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import GradientBackground from "../../../Components/Gradient/Background";
import AppHeader from "../../../Components/AppHeader"
import Description  from "../../../Components/Description";
import { Ionicons } from "@expo/vector-icons";
import baseColors from "../../../Theme/Colors/Colors";

// const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function TermsAndConditions() {
  const Navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
        <View style={styles.screenBackground}>
          <AppHeader styles={styles.headerContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  width: deviceWidth / 3,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginVertical: 20,
                }}
              >
                <Pressable onPress={() => Navigation.goBack("Profile")}>
                  <Ionicons
                    name="chevron-back-sharp"
                    size={30}
                    style={styles.TextLight}
                  />
                </Pressable>
              </View>
              <View
                style={{
                  width: deviceWidth / 3,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.TextLight}>SOSAN</Text>
              </View>
            </View>
          </AppHeader>
          <View style={styles.middleScreen}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                height: 100,
              }}
            >
              <View
                style={{
                  borderBottomWidth: 3,
                  borderBottomColor: baseColors.lightGreyColor,
                  width: 90,
                  paddingVertical: 3,
                }}
              >
                <View
                  style={{
                    borderBottomWidth: 3,
                    borderBottomColor: baseColors.lightGreyColor,
                    width: 90,
                    paddingVertical: 3,
                  }}
                ></View>
              </View>
            </View>
            <Description>
              Term And Conditions
            </Description>
          </View>
        </View>
      </GradientBackground>
    </View>
  );
}

export default TermsAndConditions