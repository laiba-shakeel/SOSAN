import React from 'react'
import { View } from 'react-native'
import baseColors from '../../Theme/Colors/Colors'

const Boxes = () => {
  return (
    <View>
      <View style={{
         border: "1px solid",
         borderColor: baseColors.sucessTextColor,
         height: 90,
         width: 60,
         borderRadius: 6,
         borderWidth: 1,
      }}>
      </View>
    </View>
  )
}

export default Boxes;
