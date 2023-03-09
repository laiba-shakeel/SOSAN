import React from 'react'
import {Text, View, style} from 'react-native'
import baseColors from '../../../Theme/Colors/Colors'
import CommonDetail from '../../Common/Details/CommonDetail'
import { useNavigation } from '@react-navigation/native'

function AddANewDoctorHospital() {
  const Navigation = useNavigation();
  return (
    <CommonDetail>
    <Text style={{
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    fontSize:20
    }}
    onPress={() => {
        Navigation.navigate("WorkingDetailHospital");
      }}
    >Continue</Text>
    </CommonDetail>
  )
}

export default AddANewDoctorHospital