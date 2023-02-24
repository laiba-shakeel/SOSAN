import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style.js';
const AppointmentList = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.List}>
        <View style={styles.ListItems}>
          <Text style={styles.title}>Name</Text>
          <Text>Lorem Spam</Text>
          <Text>Lorem Spam</Text>
          <Text>Lorem Spam</Text>
          <Text>Lorem Spam</Text>
        </View>
        <View style={styles.ListItems}>
          <Text style={styles.title}>Time</Text>
          <Text>2 Times a day</Text>
          <Text>3 Times a day</Text>
          <Text>Every 6 Hours</Text>
          <Text>Once a day</Text>
        </View>
        <View style={styles.ListItems}>
          <Text style={styles.title}>When or How</Text>
          <Text>After Meal</Text>
          <Text>After Meal</Text>
          <Text>After Meal</Text>
          <Text>After Meal</Text>
        </View>
      </View>
    </View>
  )
}

export default AppointmentList
