import React from "react";
import { View, Text, Dimensions , TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../../Components/Buttons";
import InputFiled from "../../../Components/InputFiled";
import Background from "../../../Components/Gradient/Background";
import baseColors from "../../../Theme/Colors/Colors";
import styles from "./style";
import AppHeader from "../../../Components/AppHeader";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Individuals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <Background>
      <AppHeader styles={styles.headerContainer}>
              <Text style={styles.textHeading}>SOSAN</Text>
        </AppHeader>
        <View style={styles.screenBackground}>
          <View style={styles.middleScreen}>
            <Text style={styles.heading}>Confirm your Email</Text>
            <View style={styles.BoxScreen} />
            <Text style={styles.headingMini}>Confirm email id</Text>

            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1 - 10,
                marginHorizontal: 5,
                justifyContent: "space-evenly",
              }}>
              <InputFiled 
               
                placeholderTextColor={baseColors.lightGreyColor}
                maxLength={1}
                placeholder="4"
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputFiled
                placeholderTextColor={baseColors.lightGreyColor}
                maxLength={1}
                placeholder="4"
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputFiled
                placeholderTextColor={baseColors.lightGreyColor}
                maxLength={1}
                placeholder="0"
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputFiled
             placeholderTextColor={baseColors.lightGreyColor}
                maxLength={1}
                placeholder="0"
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputFiled
                placeholderTextColor={baseColors.lightGreyColor}
                maxLength={1}
                placeholder="3"
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextNormal}>
                By singing up , agree to Photo`s{" "}
                <Text style={styles.underline}>Term of Service</Text> and{" "}
                <Text style={styles.underline}>Privacy Policy</Text>
              </Text>
              <Text style={styles.TextNorm}>
                There is a code sent to your email please check. if not press{" "}
              </Text>
              <View style={styles.resend}><Text style={styles.InputUnderline}>(Resend)</Text></View>
            </View>
            <View style={styles.BtnDiv}>
              <View style={styles.ButtonContainer}>
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
                  navigation.navigate("UserSignIn");
                }}>
                <Text style={styles.TextSty}>Next</Text>
              </TouchableButton>
            </View>
            </View>
          </View>
        </View>
      </Background>
    </View>
  );
};
export default Individuals;
