import React from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./style";
import LayoutGeneral from "../../../Layout/LayoutGeneral";
import { General } from "../../../Components/General/index";
import StuffDoctor from "../../../Components/Doctor/index";
import Medication from "../../../Components/Medication";
// import Prescription from "../../../Components/Prescription";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function HospitalDoctor() {
  return (
    <LayoutGeneral
      top={<General title="St Thomas Hospital, uk" />}
      center={<StuffDoctor title="St Thomas Hospital, uk" />}
    >
    </LayoutGeneral>
  );
}

export default HospitalDoctor;