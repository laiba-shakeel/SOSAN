import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView

} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Theme/Colors/Colors";
import { RequestCardData } from '../../../../Config/Data';
import { Ionicons } from '@expo/vector-icons';
import RequestCard from "../../../../Components/Cards/RequestCard";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const Document = () => {
  return (
    <View style={{ flex: 1, height: deviceHeight / 1, width: deviceWidth / 1, }}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            backgroundColor: baseColors.sucessColor,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7
          }}>
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text style={{ fontWeight: 'bold', color: baseColors.lightTextColor }}>Appoinment</Text>
          </View>
        </View>
      </AppHeader>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: deviceWidth / 1, paddingRight: 20, }}>
        <Text>Today</Text>
        <Ionicons name="menu-outline" size={30} color="black" />
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            flexDirection: 'column',
            width: deviceWidth / 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FlatList
              data={RequestCardData}
              renderItem={({ item }) => <RequestCard data={item} />
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 50,
    marginTop: 30,
    width: deviceWidth / 1,
  },
});

export default Document;
