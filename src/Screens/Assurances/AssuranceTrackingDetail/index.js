import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  styles from "./style";
import InputField from "../../../Components/InputFiled";
import Button from "../../../Components/Buttons";
import Darkbtn from "../../../Components/Gradient/DarkGradient"
import { RadioButton } from "react-native-paper";
import Mention from "../../../Components/Modal/Mention"
import AddedSuccessfully from "../../../Components/Modal/AddedSuccessfully";
import baseColors from "../../../Theme/Colors/Colors";
const deviceWidth = Dimensions.get("window").width;
function AssuranceTrackingDetail() {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Details</Text>
        <Text style={styles.LightText}>Inssurance Details</Text>
        <Text style={styles.formText}>Name</Text>
        <InputField placeholder="even gomez" styles={styles.InputStyling} />
        <Text style={styles.formText}>Email</Text>
        <InputField placeholder="even009@gmail.com" styles={styles.InputStyling} />
        <Text style={styles.formText}>Inssurance Plan</Text>
        <InputField placeholder="Javen Sathi" styles={styles.InputStyling} />
        <Text style={styles.formText}>Phone</Text>
        <InputField placeholder="595 5448 5233" styles={styles.InputStyling} />
        <Text style={styles.formText}>Inssurance code</Text>
        <InputField placeholder="51126HK325" styles={styles.InputStyling} />
        <Text style={styles.formText}>Inssurance Expiry Detail</Text>
        <InputField placeholder="12-08-22" styles={styles.InputStyling} />
        <Text style={styles.LightText}>Basic Details</Text>
        <Text style={styles.formText}>Height</Text>
        <InputField placeholder="5`10" styles={styles.InputStyling} />
        <Text style={styles.formText}>Blood Group</Text>
        <InputField placeholder="A+" styles={styles.InputStyling} />
        <Text style={styles.formText}>Weight</Text>
        <InputField placeholder="64kg" styles={styles.InputStyling} />
        <Text style={styles.formText}>Identity Matric</Text>
        <InputField placeholder="Mole On Face" styles={styles.InputStyling} />
        <Text style={styles.LightText}>Personal History</Text>

        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <Text style={styles.formText}>Diet</Text>
          <View style={{ flexDirection: 'row', width: deviceWidth / 1.3, justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="first" checked="checked" /><Text>Vegitarion</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="second" /><Text>Non Vegitarion</Text>
            </View>
          </View>
          <Text style={styles.formText}>Habit</Text>
          <View style={{ flexDirection: 'row', width: deviceWidth / 1.3, justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="first" /><Text>Smoker</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="second" /><Text>Non Smoker</Text>
            </View>
          </View>
          <Text style={styles.formText}>Drug Reaction</Text>
          <View style={{ flexDirection: 'row', width: deviceWidth / 1.6, justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="first" /><Text>Yes</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="second" /><Text>No</Text>
            </View>
          </View>
        </RadioButton.Group>
        <Text style={styles.LightText}>Basic History</Text>
        <Text style={styles.formText}>Post Illness</Text>
        <InputField placeholder="Headache" styles={styles.InputStyling} />
        <Text style={styles.formText}>Physical Handicam</Text>
        <InputField placeholder="NO" styles={styles.InputStyling} />
        <Text style={styles.formText}>Mental Disorder</Text>
        <InputField placeholder="NO" styles={styles.InputStyling} />
        <Text style={styles.formText}>Skin Demages</Text>
        <InputField placeholder="No" styles={styles.InputStyling} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 20,
                width:deviceWidth/1,
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
                
              >
                <Mention />
              </Button>

              <Darkbtn
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
                
              >
                <AddedSuccessfully>Accept</AddedSuccessfully>
              </Darkbtn>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AssuranceTrackingDetail;