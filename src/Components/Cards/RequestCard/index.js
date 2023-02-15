import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from 'react-native';
import baseColors from '../../../Theme/Colors/Colors';
import {RequestCardData} from '../../../Config/Data';
import Button from "../../Buttons"
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const App = () => {
  return (
    <FlatList
      data={RequestCardData}
      renderItem={({ item }) => (
        <View style={styles.item} key={item?.id}>
          <View style={{ flexDirection: "row" }}>
            <Image source={item?.image} style={styles.img} />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.title}>{item?.location}</Text>
              <Text style={styles.title}>{item?.dateDay}</Text>
              <Text style={styles.title}>{item?.time}</Text>
            </View>
            <View><Text>Icons</Text></View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button styles={{
              elevation: 0,
              backgroundColor: baseColors.sucessColor,
              width: 70,
              height: 27,
              borderRadius: 5,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
              color: baseColors.lightColor,
            }}><Text style={{ color: baseColors.lightTextColor }}>{item?.Sucess}</Text></Button>
            <Button styles={{
              elevation: 0,
              backgroundColor: baseColors.dangerTextColor,
              width: 70,
              height: 27,
              borderRadius: 5,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
              color: baseColors.lightColor,
            }}><Text style={{ color: baseColors.lightTextColor }}>{item?.Reject}</Text></Button>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: baseColors.lightColor,
    flexDirection: "column",
    width: (deviceWidth / 1) - 50,
    paddingVertical: 10,
    justifyContent: "center",
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    justifyContent: 'space-around',
    alignItems: "center",
    marginHorizontal: 25,
  },

  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
  }
});

export default App;