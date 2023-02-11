import React from 'react'
import Background from "../../../Components/Background"
import SearchField from '../../../Components/SearchField'
import baseColors from '../../../Theme/Colors/Colors'
const Chat = () => {
  return (
    <Background>
        <SearchField  styles={{
            height: 50,
            margin: 12,
            borderColor: baseColors.lightColor,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder="Search"/>
</Background>
  )
}

export default Chat
