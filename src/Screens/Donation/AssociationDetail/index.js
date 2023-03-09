import React from 'react'
import {Text, View, style} from 'react-native'
import baseColors from '../../../Theme/Colors/Colors'
import CommonDetail from '../../Common/Details/CommonDetail'
import { useNavigation } from '@react-navigation/native'
import InformationOkay from '../../../Components/Modal/InformationOkay'

function AssociationDetailDonation() {
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
      
    };

  return (
    <CommonDetail>
    <InformationOkay
    onPress={toggleModal} 
    isVisible={isModalVisible}
    >
    <Text style={{
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    fontSize:20
    }}
    >Continue</Text>
    </InformationOkay>
    </CommonDetail>
  )
}

export default AssociationDetailDonation