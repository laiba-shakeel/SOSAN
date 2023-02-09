import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import CheckBtn from "../../Components/CheckboxButton";
import Button from "../../Components/Buttons/index";
const Services = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Add Services</Text>
        <View style={styles.Box}>
          <Text style={styles.TextSty}>Services</Text>
          <View style={styles.span}>
            <CheckBtn />
            <Text style={styles.TextSpan}>Laboratory</Text>
          </View>
          <View style={styles.span}>
            <CheckBtn />
            <Text style={styles.TextSpan}>X-Ray</Text>
          </View>
          <View style={styles.span}>
            <CheckBtn />
            <Text style={styles.TextSpan}>Ultrasound</Text>
          </View>
        </View>
        </View>
        <View style={styles.BottomBtn}>
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
  );
};

export default Services;
