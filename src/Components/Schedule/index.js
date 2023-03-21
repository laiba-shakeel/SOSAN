import React, { Children } from "react";
import { Text, View, Dimensions } from "react-native";
import { styles } from "./style";
import SwitchButton from "./Switch";
import TimePicker from "./TimePicker";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
function Schedule({ children }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={{
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold'
      }}>{children}</Text>

      <View style={styles.scheduleMain}>
        <View style={styles.schedulecolumn}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: deviceWidth / 1 - 5 }}>
            <Text style={styles.scheduleDay}>Sun</Text>
            <View style={styles.scheduleBtn}>
              <SwitchButton />
            </View>
            <Text style={styles.scheduleTiming}>
              <TimePicker />
              <View>
                <Text>To</Text>
              </View>
              <TimePicker />
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: deviceWidth / 1 - 5 }}>
         <Text style={styles.scheduleDay}>Mon</Text>
         <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',alignItems:'center', width: deviceWidth / 1 - 5 }}>
            <Text style={styles.scheduleDay}>Tues</Text>
            <View style={styles.scheduleBtn}>
              <SwitchButton />
            </View>
            <Text style={styles.scheduleTiming}>
              <TimePicker />
              <View>
                <Text>To</Text>
              </View>
              <TimePicker />
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',alignItems:'center', width: deviceWidth / 1 - 5 }}>
            <Text style={styles.scheduleDay}>Wed</Text>
            <View style={styles.scheduleBtn}>
              <SwitchButton />
            </View>
            <Text style={styles.scheduleTiming}>
              <TimePicker />
              <View>
                <Text>To</Text>
              </View>
              <TimePicker />
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',alignItems:'center', width: deviceWidth / 1 - 5 }}>
            <Text style={styles.scheduleDay}>Thurs</Text>
            <View style={styles.scheduleBtn}>
              <SwitchButton />
            </View>
            <Text style={styles.scheduleTiming}>
              <TimePicker />
              <View>
                <Text>To</Text>
              </View>
              <TimePicker />
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',alignItems:'center', width: deviceWidth / 1 - 5 }}>
            <Text style={styles.scheduleDay}>Fri</Text>
            <View style={styles.scheduleBtn}>
              <SwitchButton />
            </View>
            <Text style={styles.scheduleTiming}>
              <TimePicker />
              <View>
                <Text>To</Text>
              </View>
              <TimePicker />
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',alignItems:'center', width: deviceWidth / 1 - 5 }}>
            <Text style={styles.scheduleDay}>Sat</Text>
            <View style={styles.scheduleBtn}>
              <SwitchButton/>
            </View>
            <Text style={styles.scheduleTiming}>
              <TimePicker />
              <View>
                <Text>To</Text>
              </View>
              <TimePicker />
            </Text>
          </View>
            </View>
      </View>
    </View>
  );
}

export default Schedule;