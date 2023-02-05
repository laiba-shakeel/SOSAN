import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../Components/Buttons";
import baseColors from "../../Theme/Colors/Colors";
import styles from "./style";
import TextInputField from "../../Components/InputFiled";
import CheckBtn from "../../Components/CheckboxButton";



const SignUp = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenBackground}>
        <View style={styles.middleScreen}>
          <Text var style={styles.heading}>
            Create a new account
          </Text>
          <Text style={styles.TextSty}>Enter Email</Text>
          <TextInputField placeholder="abc@gmail.com" />
          <Text style={styles.TextSty}>Enter Username</Text>
          <TextInputField placeholder="Enter Username" />
          <Text style={styles.TextSty}>Enter Phonenumber</Text>
          <TextInputField placeholder="00923584582" />
          <Text style={styles.TextSty}>Enter Password</Text>
          <TextInputField placeholder="*************" />
          <Text>What are you</Text>
     <View style={{
          flexDirection: "row",
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <CheckBtn  
          /><Text  onPress={() => {
            navigation.navigate("Individuals");
          }}>Individual</Text>
          <CheckBtn /><Text>Professional</Text>
          
        </View>
        
        <View style={{
          flexDirection: "row",
          alignItems: 'center'
        }}>
        <CheckBtn /><Text>i agree with the terms and agreements</Text>
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
                Log In
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
                Log In
              </Text>
            </TouchableButton>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignUp;
