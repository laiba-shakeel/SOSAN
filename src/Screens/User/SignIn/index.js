import React from "react";
import Button from "../../../Components/Buttons";
import InputField from "../../../Components/InputFiled";
import { LogoR, bgHero,} from "../../../Assets/Images/index"
import { styles } from "./style";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserSignIn = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text>
          <Text style={styles.textColorSuccess}>English</Text> | French
        </Text>
      </View>

      <View style={styles.screenMiddle}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={LogoR}
            style={{ height: 50 }}
          />
        </View>
        <Text style={styles.formText}>Enter Your Email</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        >abc123@gmail.com</InputField>
        <Text style={styles.formText}>Enter Your Password</Text>
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          styles={styles.InputField}
        >215456423</InputField>
        <View style={styles.Loginbutton}>
          <Button
            styles={styles.Button}
            onPress={()=>Navigation.navigate('UserAppHome')}
          >
            <Text styles={styles.ButtonText}>Login</Text>
          </Button>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Text style={styles.textColorDanger}>Forget Password</Text>
          <Text>create a new account</Text>
          <Text
            style={styles.textColorSuccess}
            onPress={() => {
              Navigation.navigate("SignUp");
            }}
          >
            Registered Now
          </Text>
        </View>
        <Image
          source={bgHero}
          style={{ height: 270,resizeMode: 'contain'}}
        />
      </View>
    </View>
  );
};

export default UserSignIn;