import React from "react";
import { View, Text, Dimensions } from "react-native";
import InputField from "../../../Components/InputFiled";
import Button from "../../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import baseColors from "../../../Theme/Colors/Colors";
import AppHeader from "../../../Components/AppHeader";
// import CheckButton from "../../../Components/CheckButton/index";
import ModalTester from "../../../Components/Modal/SectionModal";
import GradientBackground from "../../../Components/Gradient/Background";
import { Checkbox } from "react-native-paper";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SignUp() {
  const Navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [switchValue, setswitchValue] = React.useState(false);

  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
      <AppHeader styles={styles.headerContainer}>
              <Text style={styles.textHeading}>SOSAN</Text>
        </AppHeader>
        <View style={styles.screenBackground}>
          <View style={styles.screenMiddle}>
            <Text style={styles.Text}>create a new account</Text>
            <Text style={styles.TextSty}>Enter Email</Text>
        <InputField
          styles={{
            height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 3,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder=" abc@gmail.com"
        />
            <Text style={styles.TextSty}>Enter Username</Text>
            <InputField
          styles={{
            height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 3,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder=" Enter Username"
        />
            <Text style={styles.TextSty}>Enter PhoneNumber</Text>
            <InputField
          styles={{
            height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 3,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder=" 00955332158476"
        />
            <Text style={styles.TextSty}>Enter Password</Text>
            <InputField
          styles={{
            height: 40,
            margin: 12,
            borderColor: baseColors.sucessColor,
            borderWidth: 3,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder="  ***************** "
        />
            <Text style={styles.Textleft}> What are You? </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: deviceWidth / 1.1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'space-between',
                  width: deviceWidth / 2.3,
                  alignItems: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Checkbox 
                color="green"
                  status={checked ? "unchecked" : "checked" }
                  onPress={() => {
                    setChecked(!checked);
                    setswitchValue(false)
                  }}
                />
                <Text>
                  Individual
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'space-between',
                  width: deviceWidth / 2.3,
                  alignItems: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Checkbox
                color="green"
                status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                    setswitchValue(true)
                  }}
                />
                <Text>
                 Professional
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems:'center',
                width: deviceWidth / 1.1-5,
              }}
            >
               <Checkbox
               color="green"
                  status={"checked"}
                />
              <Text>i agree with the terms and agreements</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: 30,
              }}
            >
              <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.goBack("");
                }}
              >
                <Text
                  style={{
                    color: baseColors.lightColor,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Cancel
                </Text>
              </Button>
              {switchValue !== true ? (
              <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                
                onPress={() => {
                  Navigation.navigate("Individuals");
                }}
              >
                
                <Text
                  style={{
                    color: baseColors.lightColor,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Next
                </Text>
              </Button>
              ) :(

                <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.navigate("SignIn");
                }}
              >
                <ModalTester />
              </Button>
              )}
            </View>
          </View>
        </View>
      </GradientBackground>
    </View>
  );
}

export default SignUp;