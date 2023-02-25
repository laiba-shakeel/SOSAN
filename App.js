import React from "react";
import { SafeAreaView , StatusBar } from "react-native";
import StackNavigation from "./src/Navigation/StackNavigation";
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    
    <>
    <StatusBar barStyle = "#fff" hidden = {false} backgroundColor = "#1C2728" translucent = {true}/>
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer independent={true}>
    <StackNavigation/>
    </NavigationContainer>
    </SafeAreaView>
    </>
    
  );
}

export default App;
