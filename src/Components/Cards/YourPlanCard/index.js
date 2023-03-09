import React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import { bluebtn } from "../../../Assets/Images/index";
import { Foundation } from "@expo/vector-icons";
import DarkGradient from "../../../Components/Gradient/DarkGradient";
import baseColors from "../../../Theme/Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js";
const deviceWidth = Dimensions.get("window").width;

export default function YourPlanCard(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.ScreenContainer}>
        <View style={styles.ScreenTop}>
          <ImageBackground
            resizeMode="cover"
            source={bluebtn}
            style={styles.ImageStyling}
          >
            <Text style={styles.textStyling}>25 years</Text>
          </ImageBackground>
          <TouchableOpacity style={styles.TouchButton}>
            <Text style={styles.ButtonText}> Per month $50 </Text>
          </TouchableOpacity>
        </View>
          <View style={styles.CardRow}>
            <Text style={styles.TextCardRow}>
              Plan Name
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // height: 40,
              paddingBottom: 5,
            }}
          >
            <View style={{ flexDirection: "Row" , justifyContent:'center' ,  }}>
              <Text
                style={{ fontSize: 13.5, paddingHorizontal: 10, color: "gray" }}
              >
                Health Coverage of 80%
              </Text>
              
            </View>
            <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
              <Foundation
                onPress={() => {
                  navigation.navigate("AssurancePlanDetail");
                }}
                name="pencil"
                size={24}
                color="black"
              />
            </View>
          </View>
          <View>
            <View
              style={{
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{ fontSize: 16, color: "gray" }}
                onPress={props.onPress}
                // onPress={()=> {
                //     navigation.navigate("AssurancesAbout")
                //   }}
              >
                View Details
              </Text>
              <Ionicons name="chevron-forward" size={30} color="gray" />
            </View>
            {props.children}
          </View>
      </View>
    </View>
  );
}
