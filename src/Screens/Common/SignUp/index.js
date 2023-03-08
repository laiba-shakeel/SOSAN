import React from "react";
import { View,Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../../Components/Buttons";
import baseColors from "../../../Theme/Colors/Colors";
import styles from "./style";
import TextInputField from "../../../Components/InputFiled";
import CheckButton from "../../../Components/CheckboxButton";
import ModalTester from "../../../Components/Modal/SectionModal";
import Background from "../../../Components/Gradient/Background";
const deviceWidth = Dimensions.get("window").width;
const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <Background>
      <View style={styles.screenBackground}>
        <View style={styles.middleScreen}>
          <Text var style={styles.heading}>
            Create a new account
          </Text>
          <Text style={styles.TextSty}>Enter Email</Text>
          <TextInputField 
          styles={{height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,}}
             placeholder="abc@gmail.com" />
          <Text style={styles.TextSty}>Enter Username</Text>
          <TextInputField 
          styles={{height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,}}
          placeholder="Enter Username" />
          <Text style={styles.TextSty}>Enter Phonenumber</Text>
          <TextInputField 
          styles={{height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,}}
          placeholder="00923584582" />
          <Text style={styles.TextSty}>Enter Password</Text>
          <TextInputField 
          styles={{height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,}}
          placeholder="*************" />
          <Text>What are you</Text>
          <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                width:deviceWidth/1.1,
                alignItems: "center",
              }}
            >
              <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                width:deviceWidth/2.5,
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
              >
              <CheckButton />
              <Text
                onPress={() => {
                  navigation.navigate("Verification");
                }}
              >
                Individual
              </Text>
              </View>
              <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                width:deviceWidth/2.3,
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 10,
                
              }}
              >
              <CheckButton />
              <ModalTester />

              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-evenly',
                width:deviceWidth/1-50,
              }}
            >
              <CheckButton />
              <Text>i agree with the terms and agreements</Text>
            </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <TouchableButton
              styles={{
                elevation: 8,
                backgroundColor: baseColors.secondaryColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                justifyContent: "center",
                alignItems: "center",
                width: 130,
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                  alignSelf: "center",
                  textTransform: "uppercase",
                  borderRadius: 50,
                  textAlign: "center",
                }}>
                Cancel
              </Text>
            </TouchableButton>
            <TouchableButton
              styles={{
                elevation: 8,
                backgroundColor: baseColors.primaryColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                justifyContent: "center",
                alignItems: "center",
                width: 130,
              }}
              onPress={() => {
                navigation.navigate("Individuals");
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                  alignSelf: "center",
                  textTransform: "uppercase",
                  borderRadius: 50,
                  textAlign: "center",
                }}>
                Next
              </Text>
            </TouchableButton>
          </View>
        </View>
      </View>
      </Background>
    </View>
  );
};
export default SignUp;
