import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './style.js';
import { Text } from 'react-native';
import { RadioButton } from "react-native-paper";

const InformationHistoryCard = () => {
    const [value, setValue] = useState("");
    return (
        <View style={styles.Container}>
            <RadioButton.Group
                onValueChange={(value) => setValue(value)}
                value={value}
            >
                <View style={styles.item}>
                    <View style={styles.listItem}>
                        <Text style={styles.title}>Personal History</Text>
                        <View style={styles.TextSty}>
                                <View style={styles.idName}>
                                    <Text>Height(feet/cm)</Text>
                                    <RadioButton value="first"  /><Text>dsds</Text>
                                    </View>

                                    <View style={styles.idName}>
                                    <Text>Height(feet/cm)</Text>
                                    <RadioButton value="second"  /><Text>dsds</Text>
                                    </View>
                           <View style={styles.idName}>
                                    <Text>Height(feet/cm)</Text>
                                    <RadioButton value="third"  /><Text>dsds</Text>
                                    </View>
                                    <View style={styles.idName}>
                                    <Text>Height(feet/cm)</Text>
                                    <RadioButton value="fourth"  /><Text>dsds</Text>
                                    </View>
                        </View>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    )
}
export default InformationHistoryCard
