import React from 'react'
import LayoutWorkingDetailPH from "../../../Layout/LayoutWorkingDetailPH"
import { useNavigation } from '@react-navigation/native'

function WorkingDetailHospital() {
  const Navigation = useNavigation();
  return (
   <LayoutWorkingDetailPH 
onPress={()=>{
  Navigation.navigate("DoctorDetailHospital")
}}
   />
    
  )
}

export default WorkingDetailHospital