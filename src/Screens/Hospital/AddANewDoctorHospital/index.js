import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LayoutPersonalDetail from "../../../Layout/LayoutPersonalDetail";
function AddANewDoctorHospital() {
  const Navigation = useNavigation();
  return (
<LayoutPersonalDetail 
title="Add a new doctor detail"
onPress={()=>{Navigation.navigate("WorkingDetailHospital")}}
/>
  )
}

export default AddANewDoctorHospital

