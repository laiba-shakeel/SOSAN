import React from 'react'
import {Text, View, style} from 'react-native'
import baseColors from '../../../Theme/Colors/Colors'
import LayoutCommonDetail from '../../../Layout/LayoutCommonDetail'
import { useNavigation } from '@react-navigation/native'




function AssociationDetailHospital() {
  const Navigation = useNavigation();
  return (
    <LayoutCommonDetail title="Association Detail">
    <Text style={{
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    fontSize:20
    }}
    onPress={() => {
        Navigation.navigate("AddServicesHospital");
      }}
    >Continue</Text>
    </LayoutCommonDetail>
  )
}

export default AssociationDetailHospital

