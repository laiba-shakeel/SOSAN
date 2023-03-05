import React from 'react'
import {
    Text,
    View,
    Dimensions,
    FlatList,
    ScrollView,
  } from "react-native";
  import LayoutNearby from "../../../Components/LayoutNearby/index";
  import {  DonationNearbyData } from "../../../Config/Data/index";
  import SearchField from "../../../Components/SearchField/index";
  import NearByCard from "../../../Components/Cards/NearByCard/index";
  import { styles } from "./style";
  import baseColors from "../../../Theme/Colors/Colors";
  
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;

function NearbyDonation() {
  return (
    <LayoutNearby title="DONS ORG / Associations">
    {
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View>
            <SearchField styles={styles.SearchField} />
          </View>
          <View
            style={{
              borderBottomColor: baseColors.secondaryTextColor,
              borderBottomWidth: 1,
              width: deviceWidth / 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 16 }}>
            24 Organization Nearby
            </Text>
          </View>

         

          <FlatList
            data={DonationNearbyData}
            renderItem={({ item }) => <NearByCard data={item} 
            />}
          />
        </View>
      </ScrollView>
    }
  </LayoutNearby>
  )
}

export default NearbyDonation