import React from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import GradientBackground from "../../../../Components/Gradient/Background";
import AppHeader from "../../../../Components/AppHeader";
import SearchField from "../../../../Components/SearchField";
import { Entypo } from '@expo/vector-icons';
import { ChatData } from "../../../../Config/Data";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import ChatListCard from "../../../../Components/List/ChatList";
function Chat() {
  const navigation = useNavigation();
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
          
          <FlatList
            data={ChatData}
            renderItem={({ item }) => (
              <ChatListCard data={item}/>
            )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Chat;
