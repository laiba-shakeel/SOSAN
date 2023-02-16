import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../../Components/Buttons";
import Boxes from "../../../Components/BoxVerify";
import Background from "../../../Components/Background";
import styles from "./style";
const Individuals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <Background>
      <View style={styles.screenBackground}>
        <View style={styles.middleScreen}>
          <Text style={styles.heading}>Confirm your Email</Text>
          <View style={styles.BoxScreen} />
          <Text style={styles.headingMini}>Confirm email id</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.TextNormal}>
              By singing up , agree to Photo`s{" "}
              <Text style={styles.underline}>Term of Service</Text> and{" "}
              <Text style={styles.underline}>Privacy Policy</Text>
            </Text>
            <Text style={styles.TextNormal}>
              There is a code sent to your email please check. if not press{" "}
              <Text style={styles.InputUnderline}>Resend</Text>
            </Text>
          </View>
          <View style={styles.BtnDiv}>
            <TouchableButton
              styles={styles.ButtonSty}
              onPress={() => {
                navigation.navigate("SignIn");
              }}>
              <Text style={styles.TextSty}>Back</Text>
            </TouchableButton>
            <TouchableButton
              styles={styles.NextBtn}
              onPress={() => {
                navigation.navigate("SignIn");
              }}>
              <Text style={styles.TextSty}>Next</Text>
            </TouchableButton>
          </View>
        </View>
      </View>
      </Background>
    </View>
  );
};
export default Individuals;
