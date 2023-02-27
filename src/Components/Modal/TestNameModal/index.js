import React, { useState } from "react";
import { Text, View, Dimensions, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal from "react-native-modal";
import TouchableButton from '../../Buttons';
import baseColors from "../../../Theme/Colors/Colors.js";
import TextInputField from '../../InputFiled';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function TestNameModal() {
    const Navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Text onPress={toggleModal} style={styles.ImgText}>Prescribed Test</Text>

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
                            <Text style={styles.Text}>Test Name</Text>
                            <TextInputField
                                styles={{
                                    height: 50,
                                    margin: 12,
                                    borderColor: baseColors.primaryColor,
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    padding: 10,
                                    width: deviceWidth / 1 - 60,
                                    fontSize: 20,
                                    paddingStart: 20
                                }}
                                placeholder="Blood CP"
                            />
                            <TouchableButton
                                styles={{
                                    elevation: 8,
                                    backgroundColor: baseColors.primaryColor,
                                    borderRadius: 50,
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                    width: 150,
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                                onPress={() => {
                                    navigation.navigate("AppHome");
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        fontSize: 18
                                    }}
                                >
                                    Done
                                </Text>
                            </TouchableButton>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default TestNameModal