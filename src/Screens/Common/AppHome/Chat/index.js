import React from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import GradientBackground from "../../../../Components/Gradient/Background";
import AppHeader from "../../../../Components/AppHeader";
import SearchField from "../../../../Components/SearchField";
import { Entypo } from '@expo/vector-icons';
import { ChatData } from "../../../../Config/Data";
import { styles } from "./style";
import baseColors from "../../../../Theme/Colors/Colors";
import { AvatarPerson3 } from "../../../../Assets/Images";
function Chat() {
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>
            <View>
              <Text style={styles.HeadingText}>Chat</Text>
            </View>
            <View>
              <SearchField placeholder="Search" styles={styles.SearchField} />
            </View>
          </GradientBackground>
        </AppHeader>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.screenMiddle}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}

          >
            <Image source={AvatarPerson3} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
            <View style={{ flexDirection: 'column' }}>
              <Text>Jack</Text>
              <Text>hi EveryOne I'm Jack</Text>
            </View>
            <View style={{ flexDirection: 'column', }}>
              <Text>10:00 Am</Text>
              <Entypo name="mail-with-circle" size={20} style={{ color: baseColors.dangerTextColor }} />
            </View>
          </View>
          <FlatList
            data={ChatData}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }} key={item?.key}>
                <Image source={item?.image} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
                <View style={{ flexDirection: 'column' }}>
                  <Text>{item?.title}</Text>
                  <Text>{item?.message}</Text>
                </View>
                <View style={{ flexDirection: 'column', }}>
                  <Text>{item?.time}</Text>
                  <Entypo name="mail-with-circle" size={20} style={{ color: baseColors.dangerTextColor }} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Chat;
