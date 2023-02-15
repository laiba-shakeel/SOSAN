import React from 'react'
import SignIn from "../../Screens/SignIn"
import SignUp from "../../Screens/SignUp"
import PersonalDetail from '../../Screens/Details/PersonalDetail';
import CommonDetail from '../../Screens/Details/CommonDetail';
import Individuals from '../../Screens/Individuals';
import Services from '../../Screens/Services';
import AppHome from "../../Screens/AppHome"
import MyTabs from "../TabBottomNavigation"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agenda from '../../Screens/Agenda';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
<>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Individuals" component={Individuals} />
        <Stack.Screen name="PersonalDetail" component={PersonalDetail} />
        <Stack.Screen name="CommonDetail" component={CommonDetail} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Tab" component={MyTabs} />
      </Stack.Navigator>
  
</>
  )
}

export default StackNavigation

