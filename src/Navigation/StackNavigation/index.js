import React from 'react'
import SignIn from "../../Screens/Common/SignIn"
import SignUp from "../../Screens/Common/SignUp"
import PersonalDetail from '../../Screens/Common/Details/PersonalDetail';
import CommonDetail from '../../Screens/Common/Details/CommonDetail';
import Individuals from '../../Screens/Common/Individuals';
import Services from '../../Screens/Common/Services';
import AppHome from "../../Screens/Common/AppHome"
import Agenda from '../../Screens/Common/FeedSection/Agenda';
import WorkingDetail from '../../Screens/Common/Details/WorkingDetail';
import Appointment from "../../Screens/Auth/Appointments/Appointment";
import AppointmentRequest from "../../Screens/Auth/Appointments/AppointmentRequest";
import CancelledAppointment from "../../Screens/Auth/Appointments/CancelledAppointment";
import Earning from "../../Screens/Saving/Earning";
import ChangePassword from "../../Screens/Auth/ChnagePassword";
import HelpCenter from "../../Screens/Auth/HelpCenter";
import TermsAndConditions  from "../../Screens/Auth/TermsAndConditions";
import Epargne from "../../Screens/Saving/Epargne";
import CreatePost from "../../Screens/Auth/Post/CreatePost";
import PostDetail from "../../Screens/Common/Details/PostDetail";
import Faq from "../../Screens/Auth/FAQ/index";
import Privacy from "../../Screens/Auth/Privacy"
import AppointmentDetail from "../../Screens/Common/Details/AppointmentDetail"
import ChatScreen from "../../Screens/Common/ChatScreen"
import MyTabs from "../TabBottomNavigation"
import Assurances from '../../Screens/Assurances/OrderList';
import AvaialblePlan from '../../Screens/Assurances/AvaialblePlan';
import AssurancesAbout from '../../Screens/Assurances/AssuranceAbout'
import MedicalHistory from "../../Screens/Assurances/MedicalHistory"
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
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="AppointmentRequest" component={AppointmentRequest} />
        <Stack.Screen name="CancelledAppointment" component={CancelledAppointment} />
        <Stack.Screen name="Earning" component={Earning} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="Epargne" component={Epargne} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} />
        <Stack.Screen name="Assurances" component={Assurances} />
        <Stack.Screen name="AvaialblePlan" component={AvaialblePlan} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="AssurancesAbout" component={AssurancesAbout} />
        <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
      </Stack.Navigator>
  
</>
  )
}

export default StackNavigation

