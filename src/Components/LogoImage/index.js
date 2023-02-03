import React from 'react'
import { Image } from 'react-native'
import logo from "../../Assets/Images/logoR.png"
const LogoTitle = () => {
  return (
    <Image 
    source={logo} 
    style={{ alignItems: "center"}}
    />
  )
}

export default LogoTitle
