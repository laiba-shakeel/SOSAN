import React from 'react'
import { Checkbox } from "react-native-paper";
import { useState } from "react";
const CheckBtn = () => {
const [checked, setChecked] = useState(false);
  return (
    <Checkbox 
    color='green'
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  )
}

export default CheckBtn
