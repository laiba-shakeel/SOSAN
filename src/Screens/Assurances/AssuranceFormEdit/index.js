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
import InputField from "../../../Components/InputFiled";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import baseColors from "../../../Theme/Colors/Colors";
import Button from "../../../Components/Buttons";
const deviceWidth = Dimensions.get("window").width;
export default function AssuranceFormEdit() {
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
                    color: baseColors.darkColor,
                    justifyContent: "center",
                    alignItems: "center",
                    marginStart: 10,
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
              <Text style={styles.textHeading}>Edit Plan Detail</Text>
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
              <View style={{ marginHorizontal: 10, marginTop: 15 }}>
                <Text style={styles.formText}>Plan name:</Text>
                <InputField
                  styles={styles.InputStyling}
                ><Text>Javne Sethi </Text></InputField>
                <Text style={styles.formText}>Health Covergae:</Text>
                <InputField styles={styles.InputStyling} ><Text> 80 % </Text></InputField>
                <Text style={styles.formText}>Total fee(per year):</Text>
                <InputField placeholder=" $ 80 " styles={styles.InputStyling} />
                <Text style={styles.formText}>Tenure</Text>
                <InputField
                  styles={styles.InputStyling}
                ><Text>20 years </Text></InputField>
                <Text style={styles.formText}>Coverege</Text>
                <InputField
                  multiline={true}
                  numberOfLines={8}
                  styles={styles.AboutSty}
                ><Text>lbndh hfdjfh dhfh fhdhff hfhfhf dhfgdfg fgsdh fgsdhfgshf gshfgs dhfg dfhghfgfhg fgsdhfg</Text></InputField>
                <Text style={styles.formText}>Terms and Conditions</Text>
                <InputField
                  multiline={true}
                  numberOfLines={8}
                  styles={styles.AboutSty}
                ><Text>lbndh hfdjfh dhfh fhdhff hfhfhf dhfgdfg fgsdh fgsdhfgshf gshfgs dhfg dfhghfgfhg fgsdhfg</Text></InputField>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Button styles={styles.LoginBtn}>
                  <Text
                    onPress={() => {
                      navigation.navigate("AssuranceTermsAndCondition");
                    }}
                    style={styles.LoginTextSty}
                  >
                    Save
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
