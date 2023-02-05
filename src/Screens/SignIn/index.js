import React from "react";
import { View,Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../Components/Buttons";
import TextInputField from "../../Components/InputFiled";
import baseColors from "../../Theme/Colors/Colors";
import styles from "./style";
const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text>
          <Text style={styles.textColorSuccess}>English</Text> | French
        </Text>
      </View>
      <View style={styles.screenMid}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            source={require("../../Assets/Images/logoR.png")}
            style={{ height: 50}}
          />
        </View>
        <Text style={styles.TextSty}>Enter Email</Text>
        <TextInputField placeholder="abc@gmail.com" />
        <Text style={styles.TextSty}>Enter Password</Text>
        <TextInputField placeholder="************" secureTextEntry={true} />
        <View style={styles.LoginBtn}>
          <TouchableButton
            styles={{
              elevation: 8,
              backgroundColor: baseColors.primaryColor,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("SignUp");
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
        <View style= {styles.OptionScreen}>
          <Text style={styles.textColorDanger}>Forget Password</Text>
          <Text>create a new account</Text>
          <Text style={styles.textColorSuccess} 
             onPress={() => {
              navigation.navigate("SignUp");
            }}
          >Registered Now</Text>
        </View>
      </View>
      <Image
        source={require("../../Assets/Images/bgHero1.png")}
        style={{ height: 300 }}
      />
    </View>
  );
};
export default SignIn;

