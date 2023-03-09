import React from "react";
import SignIn from "../../Screens/Common/SignIn";
import SignUp from "../../Screens/Common/SignUp";
import PersonalDetail from "../../Screens/Common/Details/PersonalDetail";
import CommonDetail from "../../Screens/Common/Details/CommonDetail";
import Individuals from "../../Screens/Common/Individuals";
import Services from "../../Screens/Common/Services";
import AppHome from "../../Screens/Common/AppHome";
import Agenda from "../../Screens/Common/FeedSection/Agenda";
import WorkingDetail from "../../Screens/Common/Details/WorkingDetail";
import Appointment from "../../Screens/Auth/Appointments/Appointment";
import AppointmentRequest from "../../Screens/Auth/Appointments/AppointmentRequest";
import CancelledAppointment from "../../Screens/Auth/Appointments/CancelledAppointment";
import Earning from "../../Screens/Saving/Earning";
import ChangePassword from "../../Screens/Auth/ChnagePassword";
import HelpCenter from "../../Screens/Auth/HelpCenter";
import TermsAndConditions from "../../Screens/Auth/TermsAndConditions";
import Epargne from "../../Screens/Saving/Epargne";
import CreatePost from "../../Screens/Auth/Post/CreatePost";
import PostDetail from "../../Screens/Common/Details/PostDetail";
import Faq from "../../Screens/Auth/FAQ/index";
import Privacy from "../../Screens/Auth/Privacy";
import AppointmentDetail from "../../Screens/Common/Details/AppointmentDetail";
import ChatScreen from "../../Screens/Common/ChatScreen";
import Assurances from "../../Screens/Assurances/OrderList";
import AvaialblePlan from "../../Screens/Assurances/AvaialblePlan";
import AssurancesAbout from "../../Screens/Assurances/AssuranceAbout";
import MedicalHistory from "../../Screens/Assurances/MedicalHistory";
import PaymentSuccessFull from "../../Screens/Auth/Payment/PaymentSuccessFull";
import PaymentDone from "../../Screens/Auth/Payment/PaymentDone";
import AssurancePaymentDone from "../../Screens/Assurances/AssurancePaymentDone";
import Payment from "../../Screens/Auth/Payment/Payment";
import UserAppHome from "../../Screens/User/AppHome/index";
import AuthDetail from "../../Screens/Common/Details/AuthDetail";
import UserSignIn from "../../Screens/User/SignIn";
import Invite from "../../Screens/User/Invite";
import PharmacyOrderList from "../../Screens/Pharmacy/OrderList";
import SearchDrug from "../../Screens/Pharmacy/SearchDrug";
import AddDrug from "../../Screens/Pharmacy/AddDrug";
import NearbyPharmacy from "../../Screens/Pharmacy/NearbyPharmacy";
import AttachmentPharmacy from "../../Screens/Pharmacy/AttachmentPharmacy";
import MedicationPharmacy from "../../Screens/Pharmacy/MedicationPharmacy";
import NearbyHospital from "../../Screens/Hospital/NearByHospital";
import HospitalDoctor from "../../Screens/Hospital/HospitalDoctor";
import AppointmentDoctor from "../../Screens/Hospital/AppointmentDoctor";
import SelectDateAppointment from "../../Screens/Hospital/SelectDateAppointment";
import AddANewDoctorHospital from "../../Screens/Hospital/AddANewDoctorHospital";
import AddServices from "../../Screens/Hospital/AddServices";
import AgendaAppointment from "../../Screens/Hospital/Agenda/AgendaAppointment";
import AgendaAppointmentDetail from "../../Screens/Hospital/Agenda/AgendaAppointmentDetail";
import TestAppointmentDetail from "../../Screens/Hospital/Agenda/TestAppointmentDetail";
import AssociationDetailHospital from "../../Screens/Hospital/AssociationDetailHospital";
import DoctorDetailHospital from "../../Screens/Hospital/DoctorDetailHospital";
import OverViewHospitality from "../../Screens/Hospital/Overview";
import ProfileDetailHopital from "../../Screens/Hospital/ProfileDetailHospital";
import CreatePostHospital from "../../Screens/Hospital/Publicity/CreatePost";
import AddSpecializationHospital from "../../Screens/Hospital/Services/AddSpecialization";
import DentistsHospital from "../../Screens/Hospital/Services/Dentists";
import SpecialistAndDiagnosticsHospital from "../../Screens/Hospital/Services/SpecialistAndDiagnostics";
import UltraSoundHospital from "../../Screens/Hospital/Services/UltraSound";
import StuffDetailHospital from "../../Screens/Hospital/StuffDetailHospital";
import WorkingDetailHospital from "../../Screens/Hospital/WorkingDetailHospital";
import NearByDoctor from "../../Screens/Doctor/NearByDoctor";
import Availability from "../../Screens/Doctor/Availability";
import NearbyDonation from "../../Screens/Donation/NearByDonation";
import AddDonation from "../../Screens/Donation/AddDonation";
import ProtecteeDetail from "../../Screens/Common/Details/ProtecteeDetail";
import AssociationDetail from "../../Screens/Common/Details/AssosiationDetail"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "../TabBottomNavigation";
import UserTabBottomNavigation from "../UserTabBottomNavigation";
import InsuranceTabBottomNavigation from "../InsuranceTabBottomNavigation"
import AssuranceAppHome from "../../Screens/Assurances/AppHome";
import AssuranceDetail from "../../Screens/Assurances/AssuranceDetail"
import AssuranceServices from "../../Screens/Assurances/AssuranceServices"
import AssuranceAgenda from "../../Screens/Assurances/Agenda/index"
import AssuranceReportDetail from "../../Screens/Assurances/AssuranceReportDetail"
import AssuranceTracking from "../../Screens/Assurances/Tracking"
import AssuranceEditDetail from "../../Screens/Assurances/AssuranceEditDetail"
import RegisteredClientsAssurance from "../../Screens/Assurances/RegisteredClients"
import AssurancePlanDetail from "../../Screens/Assurances/AssurancePlanDetail"
import AssuranceTermsAndCondition from "../../Screens/Assurances/AssuranceTermsAndCondition"
import HospitalityTabBottomNavigation from "../HospitalityTabBottomNavigation";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Individuals" component={Individuals} />
        <Stack.Screen name="PersonalDetail" component={PersonalDetail} />
        <Stack.Screen name="CommonDetail" component={CommonDetail} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="WorkingDetail" component={WorkingDetail} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="AppointmentRequest"component={AppointmentRequest}/>
        <Stack.Screen name="CancelledAppointment"component={CancelledAppointment}/>
        <Stack.Screen name="Earning" component={Earning} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="TermsAndConditions"component={TermsAndConditions} />
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
        <Stack.Screen name="PaymentSuccessFull" component={PaymentSuccessFull}/>
        <Stack.Screen name="PaymentDone" component={PaymentDone} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="AssurancePaymentDone" component={AssurancePaymentDone}/>
        <Stack.Screen name="UserAppHome" component={UserAppHome} />
        <Stack.Screen name="AuthDetail" component={AuthDetail} />
        <Stack.Screen name="UserSignIn" component={UserSignIn} />
        <Stack.Screen name="Invite" component={Invite} />
        <Stack.Screen name="PharmacyOrderList" component={PharmacyOrderList} />
        <Stack.Screen name="SearchDrug" component={SearchDrug} />
        <Stack.Screen name="AddDrug" component={AddDrug} />
        <Stack.Screen name="NearbyPharmacy" component={NearbyPharmacy} />
        <Stack.Screen name="AttachmentPharmacy" component={AttachmentPharmacy}/>
        <Stack.Screen name="MedicationPharmacy" component={MedicationPharmacy}/>
        <Stack.Screen name="NearbyHospital" component={NearbyHospital} />
        <Stack.Screen name="HospitalDoctor" component={HospitalDoctor} />
        <Stack.Screen name="AppointmentDoctor" component={AppointmentDoctor} />
        <Stack.Screen name="NearByDoctor" component={NearByDoctor} />
        <Stack.Screen name="Availability" component={Availability} />
        <Stack.Screen name="NearbyDonation" component={NearbyDonation} />
        <Stack.Screen name="AddDonation" component={AddDonation} />
        <Stack.Screen name="SelectDateAppointment" component={SelectDateAppointment} />
        <Stack.Screen name="ProtecteeDetail" component={ProtecteeDetail} />
        <Stack.Screen name= "AssociationDetail" component={AssociationDetail} />
        <Stack.Screen name="AssuranceAppHome" component={AssuranceAppHome}/>
        <Stack.Screen name="AssuranceDetail" component={AssuranceDetail}/>
        <Stack.Screen name="AssuranceServices" component={AssuranceServices}/>
        <Stack.Screen name ="AssuranceAgenda" component={AssuranceAgenda}/>
        <Stack.Screen name="AssuranceReportDetail" component={AssuranceReportDetail}/>
        <Stack.Screen name = "AssuranceTracking" component={AssuranceTracking}/>
        <Stack.Screen name="AssuranceEditDetail" component={AssuranceEditDetail}/>
        <Stack.Screen name="RegisteredClientsAssurance" component={RegisteredClientsAssurance}/>
        <Stack.Screen name="AssurancePlanDetail" component={AssurancePlanDetail}/>
        <Stack.Screen name="AssuranceTermsAndCondition" component={AssuranceTermsAndCondition}/>
        <Stack.Screen name="AddANewDoctorHospital" component={AddANewDoctorHospital}/>
        <Stack.Screen name="AddServices" component={AddServices}/>
        <Stack.Screen name="AgendaAppointment" component={AgendaAppointment}/>
        <Stack.Screen name="AgendaAppointmentDetail" component={AgendaAppointmentDetail}/>
        <Stack.Screen name="TestAppointmentDetail" component={TestAppointmentDetail}/>
        <Stack.Screen name="AssociationDetailHospital" component={AssociationDetailHospital}/>
        <Stack.Screen name="DoctorDetailHospital" component={DoctorDetailHospital}/>
        <Stack.Screen name="OverViewHospitality" component={OverViewHospitality}/>
        <Stack.Screen name="ProfileDetailHopital" component={ProfileDetailHopital}/>
        <Stack.Screen name="CreatePostHospital" component={CreatePostHospital}/>
        <Stack.Screen name="AddSpecializationHospital"component={AddSpecializationHospital}/>
        <Stack.Screen name="DentistsHospital" component={DentistsHospital}/>
        <Stack.Screen name="SpecialistAndDiagnosticsHospital" component={SpecialistAndDiagnosticsHospital}/>
        <Stack.Screen name="UltraSoundHospital"component={UltraSoundHospital}/>
        <Stack.Screen name="StuffDetailHospital" component={StuffDetailHospital}/>
        <Stack.Screen name="WorkingDetailHospital" component={WorkingDetailHospital}/>
        <Stack.Screen name="AssuranceTab" component={InsuranceTabBottomNavigation}/>
        <Stack.Screen name="UserTabs" component={UserTabBottomNavigation} />
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="HospitalityTabBottomNavigation" component={HospitalityTabBottomNavigation}/>
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
