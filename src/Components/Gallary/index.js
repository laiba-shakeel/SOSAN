import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./style";
const Gallary = () => {
  return (
    <View style={styles.MainConatiner}>
      <Text style={styles.TextSty}>Gallary</Text>
      <Text style={styles.TextStyle}>Add Minimum 2 Photos</Text>
      <View style={styles.TopImg}>
        <Image
          style={styles.ColumnImg}
          source={require("../../Assets/Images/vector.png")}
        />
      </View>
      <View style={styles.RowImages}>
        <Image
          style={styles.ImgSty}
          source={require("../../Assets/Images/vector.png")}
        />
        <Image
          style={styles.ImgSty}
          source={require("../../Assets/Images/vector.png")}
        />
        <Image
          style={styles.ImgSty}
          source={require("../../Assets/Images/vector.png")}
        />
      </View>
    </View>
  );
};

export default Gallary;
