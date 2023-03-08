import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './style.js';
import { AvatarPerson1 } from '../../../Assets/Images';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ReportCard = () => {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.Container}>
            <View style={styles.item}>
                <View style={styles.imgDiv}>
                    <Image  source={AvatarPerson1} style={styles.imageSty} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text 
                        onPress={()=>{
                            navigation.navigate("AssuranceReportDetail")
                        }}
                        style={styles.title}>Alfonso Vetrovs</Text>
                        <Text style={styles.id}>23years` Male</Text>
                    </View>

                </View>
                <View style={styles.DivTwo}>
             <Ionicons 
             onPress={()=>{
                navigation.navigate("ChatScreen")
             }}
             name="chatbubble-ellipses" size={39} color="green" />
                </View>
            </View>
         </View>
         </>
    )
}

export default ReportCard
