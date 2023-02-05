import React from 'react'
import { View , Text} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from './style';
const Individuals = () => {
const navigation = useNavigation();

return (
    <View style={styles.screenContainer}>
      <View style={styles.screenBackground}>
        <View style={styles.middleScreen}>
          <Text var style={styles.heading}>
            Confirm Your Email
          </Text>
          </View>
          </View>
          </View>
  )
}
export default Individuals

