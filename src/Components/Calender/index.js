import React, { useState } from "react";
import { View, Text, Image , Dimensions } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons';
import { AvatarPerson4 } from "../../Assets/Images/index"
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
     
     <View style={{flexDirection:'column', paddingVertical:10}}>
     <Text style={{ fontSize: 16 , paddingHorizontal:10, fontWeight: '500'}}>SOSAN id: 15151895</Text>
     <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal:10 }}>
       <Text style={{ fontSize: 18, fontWeight: '500'}}>August,2022</Text>
       <AntDesign name="down" size={20} color="black" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
     </View>
      </View>
      <View style={{ justifyContent: 'flex-end',paddingBottom:10 }}>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={AvatarPerson4} />
      </View>
    </View>
  );
};

export default Calender;