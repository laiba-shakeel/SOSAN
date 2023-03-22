import React from 'react'
import LayoutWorkingDetailPH from "../../../Layout/LayoutWorkingDetailPH"
import { useNavigation } from '@react-navigation/native'

function WorkingDetailPharmacy() {
  const Navigation = useNavigation();
  return (
  <LayoutWorkingDetailPH onPress={()=>{
    Navigation.navigate("DoctorDetailPharmacy")
  }}/>
  )
}

export default WorkingDetailPharmacy