import React from "react";
import StackNavigation from "./src/Navigation/StackNavigation";
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    
    <NavigationContainer independent={true}>
      <StackNavigation />
      </NavigationContainer>
    
  );
}

export default App;
