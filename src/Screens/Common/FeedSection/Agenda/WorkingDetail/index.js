import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image , TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import InputField from "../../../../../Components/InputFiled";
import Schedule from "../../../../../Components/Schedule";
import Button from "../../../../../Components/Buttons";
import { Entypo } from '@expo/vector-icons';
import CheckBtn from '../../../../../Components/CheckboxButton'
import baseColors from "../../../../../Theme/Colors/Colors";
function WorkingDetail() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Working Details</Text>
        <Text style={styles.formText}>Institution Name</Text>
        <InputField placeholder="Institution Name" styles={styles.InputStyling} />
        <Text style={styles.formText}>Institution Address </Text>
        <InputField placeholder="Heart International Hospital Islamabad" styles={styles.InputStyling} />
        <View style={styles.lightTextView}><Text style={styles.lightText}>--MARK HERE--</Text></View>
       <View style={styles.locationView}>
        <Text style={{fontWeight:'bold'}}>
        <Entypo name="location-pin" size={20} style={{color:baseColors.sucessColor}}/>
       2 Rue Charles Vigurie, 31300 Toulous, France
        </Text>
       </View>
       <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', justifyContent: 'flex-start' , }}>
        <TouchableOpacity
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 5,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 22,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                 Get Direction
                </Text>
              </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <TouchableOpacity
                style={{
                    elevation: 8,
                    backgroundColor: baseColors.primaryColor,
                    borderRadius: 5,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 22,
                    marginVertical: 20,
                }}
              >
               <Text
                  style={{
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                Share Location
                </Text>
              </TouchableOpacity>
        </View>
       </View>
        <View style={styles.Mapping}>
          <Image
            style={styles.ImgSty}
            source={require("../../../../../Assets/Images/map.png")}
          />
        </View>
        <Text style={styles.formText}>Institution Phone</Text>
        <InputField placeholder="0215229035" styles={styles.InputStyling} />
        <Text style={styles.formText}>Institution Email</Text>
        <InputField placeholder="Institution Email(if any) " styles={styles.InputStyling} />
        <View style={styles.institutionView}>
            <Text style={styles.institutionText}>Appointment Type</Text>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          textAlign:'center'
        }}>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
          <CheckBtn/>
          <Text style={{
            fontSize:16
          }}>Clinic Visit</Text>
       </View>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
          <CheckBtn/>
          <Text style={{
            fontSize:16
          }}>Tale Communication</Text>
       </View>
        </View>
        <View>
          <Schedule>Availibility</Schedule>
        </View>
        <View>
          <Text style={{
            fontSize:16, 
            fontWeight:'bold',
            marginHorizontal: 5
          }}>Consultation Fee</Text>
          <InputField placeholder="$ 15"  styles={styles.WebText} >
        </InputField>
        </View>
        <View style={styles.institutionView}>
            <Text style={styles.institutionText}>Payment Method</Text>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          textAlign:'center'
        }}>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
          <CheckBtn/>
          <Text style={{
            fontSize:16
          }}>Instant Cash</Text>
       </View>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
          <CheckBtn/>
          <Text style={{
            fontSize:16
          }}>Mobile money</Text>
       </View>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center',
          textAlign:'center'
        }}>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
          <CheckBtn/>
          <Text style={{
            fontSize:16
          }}>Credit card</Text>
       </View>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
          <CheckBtn/>
          <Text style={{
            fontSize:16
          }}>MFS</Text>
       </View>
        </View>
        {/* <Text style={styles.TextPrimary}>Owner Detail</Text>
        <Text style={styles.formText}>Website</Text>
        <InputField placeholder="Type Here" styles={styles.WebText} />
        <Text style={styles.formText}>Website</Text>
        <InputField placeholder="Type Here" styles={styles.WebText} />
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.AboutSty}
        /> */}


        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Button
            styles={styles.LoginBtn}
            onPress={() => {
              navigation.goBack("Agenda");
            }}>
            <Text style={styles.LoginTextSty}>Add</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default WorkingDetail;