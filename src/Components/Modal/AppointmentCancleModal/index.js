import React, { useState } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js"
import { alert } from "../../../Assets/Images/index";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import baseColors from "../../../Theme/Colors/Colors.js";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AppointmentCancelModal() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Ionicons name="trash-bin-sharp" size={24} onPress={toggleModal} style={{ color: baseColors.dangerTextColor, paddingTop: 10 }} />

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            height: deviceHeight / 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}

        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Image source={alert} style={{ height: 100, width: 100, borderRadius: 50 }}
              ></Image>
              <Text style={styles.Text}
                onPress={() => {
                  Navigation.navigate("SignIn");
                  toggleModal();
                }} >Success!</Text>
              <Text style={styles.modalViewText}>Are you sure to cancel Appointment ?</Text>
           <View style={{ width: deviceWidth / 1,flexDirection: 'row' , justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text>Yes</Text>
            <Text>No</Text>
           </View>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AppointmentCancelModal