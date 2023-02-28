import React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions} from "react-native"
import { useNavigation } from '@react-navigation/native'
import baseColors from '../../../Theme/Colors/Colors'
import { Entypo } from '@expo/vector-icons';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width; 

function ChatListCard({data}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    >
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }} key={data?.key}>
       <Image source={data?.image} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
       <View style={{ flexDirection: 'column' }}>
         <Text
         onPress={()=> {
          navigation.navigate(data?.goTo)}}>{data?.title}</Text>
         <Text>{data?.message}</Text>
       </View>
       <View style={{ flexDirection: 'column', }}>
         <Text>{data?.time}</Text>
         <Entypo name="mail-with-circle" size={20} style={{ color: baseColors.dangerTextColor }} />
       </View>
     </View>
     </TouchableOpacity>
  )
}

export default ChatListCard
