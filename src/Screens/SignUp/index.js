import { Button } from "react-native";
import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <Button
        title="Sign In"
        onPress={() => {
          Navigation.navigate("SignIn");
        }}
      />
    </View>
  );
};

export default SignUp;
