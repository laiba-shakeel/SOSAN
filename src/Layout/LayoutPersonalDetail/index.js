import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "./style";
import InputField from "../../Components/InputFiled";
import SelectDropdown from "../../Components/SelectDropDown";
import Button from "../../Components/Buttons";
import {Dummy} from "../../Assets/Images/index";

function LayoutPersonalDetail(props) {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <Text style={styles.Text}>{props.title}</Text>
        <View style={styles.imageStyle}>
          <Image
            style={styles.image}
            source={Dummy}
          />
        </View>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}></InputField>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}></InputField>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}></InputField>
        <SelectDropdown />
        <Text style={styles.formText}>Phone</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}></InputField>
        <Text style={styles.formText}>Website</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}></InputField>
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.InputFieldAbout}></InputField>
        <View>
          <Button 
          onPress={props.onPress}
            styles={styles.Button}           
          >
            <Text style={styles.ButtonText}>Login</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default LayoutPersonalDetail;
