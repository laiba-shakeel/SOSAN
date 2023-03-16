import React from "react";
import { View, Text, Image, ImageBackground , Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../../Components/Buttons";
import TextInputField from "../../../Components/InputFiled";
import baseColors from "../../../Theme/Colors/Colors";

import styles from "./style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const UserSignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style>
          <Text style={styles.textColorSuccess}>English</Text>
          <Text style={{color:'gray' ,fontSize:20}}> |</Text>
          <Text style={{color:'gray'}}> French</Text>
        </Text>
      </View>
      <View style={styles.screenMid}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../Assets/Images/logoR.png")}
            style={{ height: 60 }}
          />
        </View>
        <View style={{flexDirection:'row' ,justifyContent:'center'}}>
          <Text style={{fontSize:18, color:baseColors.sucessColor, fontWeight:"bold"}}>Log In</Text>
        </View>
        <View style={{ marginTop:15 , height: deviceHeight /1.34}}>
        <Text style={styles.TextSty}>Enter Email</Text>
        <TextInputField
          styles={{
            height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 3,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder="  Jane20@gmail.com"
        />
        <Text style={styles.TextSty}>Enter Password</Text>
        <TextInputField
          styles={{
            height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 3,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder="  *****************"
          secureTextEntry={true}
        />
        <View style={styles.LoginBtn}>
          <TouchableButton
            styles={{
              elevation: 8,
              backgroundColor: baseColors.primaryColor,
              borderRadius: 50,
              paddingVertical: 7,
              paddingHorizontal: 12,
              width: 220,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("UserAppHome");
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize:20
              }}
            >
              Log In
            </Text>
          </TouchableButton>
        </View>
        <View style={styles.OptionScreen}>
          <Text style={styles.textColorDanger}>Forget Password</Text>
          <Text>create a new account</Text>
          <Text
            style={styles.textColorSuccess}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            Registered Now
          </Text>
          
        </View>
     
      <ImageBackground 
        source={require("../../../Assets/Images/bgHero1.png")}
        style={{height: 222, resizeMode: "contain" }}
      />
       </View>
       </View>
    </View>
  );
};
export default UserSignIn;