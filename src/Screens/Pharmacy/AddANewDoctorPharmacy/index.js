import React from 'react'
import LayoutPersonalDetail from '../../../Layout/LayoutPersonalDetail';
import { useNavigation } from '@react-navigation/native';

function AddANewDoctorPharmacy() {
  const navigation = useNavigation();
  return (
   <LayoutPersonalDetail 
   title="Add A New Detail"
   onPress={() => {
   navigation.navigate("WorkingDetailPharmacy");
 }}
   />
  )
}

export default AddANewDoctorPharmacy



