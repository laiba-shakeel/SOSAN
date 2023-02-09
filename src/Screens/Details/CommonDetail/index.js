import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style";
import InputField from "../../../Components/InputFiled/index";
import Gallary from "../../../Components/Gallary";
import Schedule from "../../../Components/Schedule";
import Button from "../../../Components/Buttons";

function CommonDetail() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Detail</Text>
        <Text style={styles.formText}>Institution Name</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Set Location</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />

        <Text style={styles.lightText}>Set on map</Text>
        <View style={styles.Mapping}>
          <Image
            style={{ height: 200 }}
            source={require("../../../Assets/Images/map.png")}
          />
        </View>
        <Text style={styles.formText}>Phone</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Website (if any) </Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.AboutSty}
        />
        <View>
          <Schedule />
        </View>
        <View>
          <Gallary />
        </View>
        <Text style={styles.TextPrimary}>Owner Detail</Text>
        <Text style={styles.formText}>Website</Text>
        <InputField placeholder="Type Here" styles={styles.WebText} />
        <Text style={styles.formText}>Website</Text>
        <InputField placeholder="Type Here" styles={styles.WebText} />
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.AboutSty}
        />
        <View>
          <Button
            styles={styles.LoginBtn}
            onPress={() => {
              navigation.navigate("Services");
            }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}>
              Login
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default CommonDetail;
