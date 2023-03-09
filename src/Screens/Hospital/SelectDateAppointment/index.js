import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import baseColors from "../../../Theme/Colors/Colors";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { styles } from "./style";
import DarkGradient from "../../../Components/Gradient/DarkGradient";
import { useNavigation } from "@react-navigation/native";
import { AvatarPerson2 } from "../../../Assets/Images";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SelectDateAppointment() {
  const [shouldShow, setShouldShow] = useState(false);
  const [AnotherShow, setAnotherShow] = useState(false);

  const Navigation = useNavigation();

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
              <TouchableOpacity onPress={() => Navigation.navigate("Feed")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={37}
                  style={{ color: baseColors.lightTextColor }}
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
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Payment
              </Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <AntDesign
                name="exclamationcircleo"
                size={20}
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              />
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
          // paddingHorizontal:10
        }}
      >
        <ScrollView>
          <View style={styles.screenMiddle}>
            <View style={styles.View}>
              <View style={styles.itemTop}>
                <View style={styles.imgView}>
                  <Image source={AvatarPerson2} style={styles.imageSty} />
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>Kianna Levin</Text>
                  <Text style={styles.email}>General Practitioner</Text>
                  <View style={styles.idViewTwo}>
                    <MaterialIcons
                      name="lock-outline"
                      size={18}
                      style={{ color: baseColors.primaryColor }}
                    />
                    <Text style={styles.id}>3 year</Text>
                  </View>
                </View>
                <View>
                  <AntDesign
                    name="heart"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                setShouldShow(true);
                setAnotherShow(false);
              }}
            >
              <View style={styles.CardStyling}>
                <View style={styles.item}>
                  <View style={styles.TitleHead}>
                    <View style={styles.ItemDisc}>
                      <FontAwesome5
                        name="calendar-week"
                        size={14}
                        style={{
                          color: baseColors.primaryColor,
                          paddingRight: 6,
                        }}
                      />
                      <Text>Wednesday 15-2-23</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <Entypo
                        name="location"
                        size={14}
                        style={{
                          color: baseColors.dangerTextColor,
                          paddingRight: 6,
                        }}
                      />
                      <Text>North Karachi</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <Ionicons
                        name="time"
                        size={14}
                        style={{
                          color: baseColors.sucessColor,
                          paddingRight: 6,
                        }}
                      />
                      <Text>07:32</Text>
                    </View>
                  </View>
                  <View>
                    <Ionicons
                      name="settings"
                      size={24}
                      style={{ color: baseColors.primaryColor }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {shouldShow ? (
              <View style={styles.HiddenShowView}>
                <View style={styles.HiddenShowitems}>
                  <Text style={{fontSize:15, fontWeight:'600'}}>Select Date</Text>
                </View>
                <View style={styles.CalenderField}>
                  <Text style={{ color: baseColors.secondaryTextColor }}>
                    17-08-2022
                  </Text>
                  <AntDesign
                    name="calendar"
                    size={24}
                    style={{ color: baseColors.sucessTextColor }}
                  />
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setAnotherShow(true);
                setShouldShow(false);
              }}
            >
              <View style={styles.CardStyling}>
                <View style={styles.item}>
                  <View style={styles.TitleHead}>
                    <View style={styles.ItemDisc}>
                      <FontAwesome5
                        name="calendar-week"
                        size={14}
                        style={{
                          color: baseColors.primaryColor,
                          paddingRight: 6,
                        }}
                      />
                      <Text>Wednesday 15-2-23</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <Entypo
                        name="location"
                        size={14}
                        style={{
                          color: baseColors.dangerTextColor,
                          paddingRight: 6,
                        }}
                      />
                      <Text>North Karachi</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <Ionicons
                        name="time"
                        size={14}
                        style={{
                          color: baseColors.sucessColor,
                          paddingRight: 6,
                        }}
                      />
                      <Text>07:32</Text>
                    </View>
                  </View>
                  <View>
                    <Ionicons
                      name="settings"
                      size={24}
                      style={{ color: baseColors.primaryColor }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {AnotherShow ? (
              <View style={styles.HiddenShowView}>
                <View style={styles.HiddenShowitems}>
                  <Text style={{fontSize:15, fontWeight:'600'}}>Select Date</Text>
                </View>
                <View style={styles.CalenderField}>
                  <Text style={{ color: baseColors.secondaryTextColor }}>
                    17-08-2022
                  </Text>
                  <AntDesign
                    name="calendar"
                    size={24}
                    style={{ color: baseColors.sucessTextColor }}
                  />
                </View>
              </View>
            ) : null}

            <View style={styles.ViewBottom}>
              <DarkGradient
                styles={styles.ButtonPrimary}
                onPress={() => {
                  Navigation.goBack("");
                }}
              >
                <Text
                  style={styles.ButtonTextPrimary}
                  onPress={() => {
                    Navigation.navigate("PaymentSuccessFull");
                  }}
                >
                  Done
                </Text>
              </DarkGradient>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default SelectDateAppointment;