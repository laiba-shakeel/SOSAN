import React from "react";
import { View, StyleSheet, Text, Dimensions, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../Components/Buttons";
import TextInputField from "../../Components/InputFiled";
import baseColors from "../../Theme/Colors/Colors";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
      <Text><Text style={styles.textColorSuccess}>English</Text> | French</Text>
      </View>
      <View style={styles.screenMid}>
<Image
source={require('../../Assets/Images/logoR.png')}
style={{ height: 100}}/>
        <Text style={styles.TextSty}>Enter Email</Text>
        <TextInputField placeholder="Your Email" />
        <Text style={styles.TextSty}>Enter Password</Text>
        <TextInputField placeholder="Password" secureTextEntry={true} />
        <View style={styles.LoginBtn}>
          <TouchableButton
            styles={{ 
              elevation: 8,
              backgroundColor: baseColors.primaryColor,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,}}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >Log In</TouchableButton>
        </View>
        <View>
      <Text style={styles.textColorDanger}>Forget Password</Text>
      <Text>create a new account</Text>
      <Text style={styles.textColorSuccess}>Registered Now</Text>
    </View>

      </View>
      <Image
     source={require('../../Assets/Images/bgHero1.png')}
       style={{ height: 300}}/>
    </View>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: baseColors.lightColor,
  },
  screenTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 40,
  },
  screenMid: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 20
    // flex: 1,
  },
  LoginBtn: {
    flexDirection: "column",
    justifyContent: "center",
    width: 130,
    margin: "auto",
  },
  TextSty: {
    paddingLeft: 11,
    fontWeight: 600,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  textColorSuccess:{
    color: baseColors.sucessTextColor
  },
  textColorDanger:{
    color: baseColors.dangerTextColor
  },
});
