import React, { useState } from "react";
import { View, Text, Image , Dimensions } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons';
import { AvatarPerson1 } from "../../Assets/Images/index"
const deviceWidth = Dimensions.get("window").width;
const Calender = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10 , width: deviceWidth / 1-20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', paddingHorizontal: 4 , fontSize: 20}}>August,2022</Text>
        <AntDesign name="down" size={20} color="black" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={{ justifyContent: 'flex-end', }}>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={AvatarPerson1} />
      </View>
    </View>
  );
};

export default Calender;