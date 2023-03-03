import React , {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './style.js';
import baseColors from '../../../Theme/Colors/Colors'


// const dateDay = [
//     {
//         day: 'Sunday' , date: '10', type: '1'
//     },
//     {
//         day: 'Monday' , date: '11', type: '2'
//     },
    
// ]

const ListOfSchedule = ({data}) => {
//    const [dayDateType , SetdayDateType ] = useState('1'); 

  return (
    <View style={styles.CardStyling} key={data?.id}>
            <View style={styles.item} >
              <View style={styles.TitleHead}>
              <View style={styles.ItemDisc}><FontAwesome5 name="calendar-week" size={14} style={{ color: baseColors.primaryColor, paddingRight: 6 }} /><Text style={styles.discp}>{data?.dateDay}</Text></View>
                <View style={styles.ItemDisc}><Entypo name="location" size={14} style={{ color: baseColors.dangerTextColor , paddingRight: 6 }} /><Text style={styles.discp}>{data?.location}</Text></View>
                <View style={styles.ItemDisc}><Ionicons name="time" size={14} style={{ color: baseColors.sucessColor , paddingRight: 6}} /><Text style={styles.discp}>{data?.time}</Text></View>
              </View>
              <View><Ionicons name="settings" size={24} style={{ color: baseColors.primaryColor }} /></View>
            </View>
          </View>
  );
};
export default ListOfSchedule;