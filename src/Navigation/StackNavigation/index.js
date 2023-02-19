import React from 'react'
import SignIn from "../../Screens/Common/SignIn"
import SignUp from "../../Screens/Common/SignUp"
import PersonalDetail from '../../Screens/Common/Details/PersonalDetail';
import CommonDetail from '../../Screens/Common/Details/CommonDetail';
import Individuals from '../../Screens/Common/Individuals';
import Services from '../../Screens/Common/Services';
import AppHome from "../../Screens/Common/AppHome"
import Agenda from '../../Screens/Common/FeedSection/Agenda';
import WorkingDetail from '../../Screens/Common/FeedSection/Agenda/WorkingDetail';
import MyTabs from "../TabBottomNavigation"

import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Stack.Screen name="WorkingDetail" component={WorkingDetail} />
      </Stack.Navigator>
  
</>
  )
}

export default StackNavigation

