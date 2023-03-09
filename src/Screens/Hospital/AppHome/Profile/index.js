import React from "react";
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AvatarPerson3 } from "../../../../Assets/Images/index";
import Button from "../../../../Components/Buttons/index";
import SwitchButton from "../../../../Components/Schedule/Switch";
import { styles } from "./style";
import baseColors from "../../../../Theme/Colors/Colors";
import { Title } from "react-native-paper";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Profile() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      {/* <View style={styles.screen}> */}

      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Pressable onPress={() => Navigation.goBack("Feed")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={styles.TextSecondary}
                />
              </Pressable>
            </View>
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Personal Detail</Text>
            </View>
          </View>
        </AppHeader>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center",width: deviceWidth / 1, }}
        >
          <View style={styles.imageStyle}>
            <Image style={styles.image} source={AvatarPerson3} />
          </View>
          <View
            style={{
              flexDirection: "column",
              width: deviceWidth / 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1.6,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>John Smith</Text>
              </View>
              <View
                style={{
                  width: deviceWidth / 2.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="pencil-square-o"
                  size={22}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("ProfileDetailHopital");
                  }}
                />
              </View>
            </View>
            <Text style={styles.TextSecondary}>johnSmith1234@gmail.com</Text>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
                <Text style={styles.TextSecondary}>Email:</Text>
                <Text style={styles.TextSecondary}>Phone:</Text>
                <Text style={styles.TextSecondary}>SOSAN ID:</Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
                <Text style={styles.TextSecondary}>jsmth14@gmail.com</Text>
                <Text style={styles.TextSecondary}>+923 0000 0000</Text>
                <Text style={styles.TextSecondary}>25ln555</Text>
              </View>
            </View>
            <Text style={{fontSize:13, fontWeight:'400', color:baseColors.primaryTextColor}}>
              http://www.chu-toulouse.fr
            </Text>
          </View>

          <View style={styles.Listmain}>
            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Previous appointment</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Notification</Text>
                <View>
                  <SwitchButton />
                </View>
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Allow your Location</Text>
                <View>
                  <SwitchButton />
                </View>
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Change Password</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Help Center</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Terms and Conditions</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextDanger}>cancelled appointment</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}
                onPress={() => {
                  Navigation.goBack("");
                }}
                >Log Out</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.goBack("");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

export default Profile;