import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import AppHeaderText from "../components/AppHeaderText";
import AppText from "../components/AppText";
import AppLightText from "../components/AppLightText";
import AppMediumText from "../components/AppMediumText";
import AppButton from "../components/AppButton";
import globalStyles from "../../globalStyles";
import AppInput from "../components/AppInput";

const VerifyMobile = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <MaterialIcons name="keyboard-backspace" size={24} color="black" />
        <AppMediumText>Back</AppMediumText>
      </View>

      <AppHeaderText style={styles.spaceBelow}>
        Security verification
      </AppHeaderText>
      <AppInput
        onChange={() => console.log("je")}
        label="Phone Verification Code"
        value={3}
      />
      <AppText style={styles.spaceBelow}>
        Please enter a 6 digit verification send to +254701***855
      </AppText>
      <View style={[globalStyles.flexVertial, styles.spaceBelow]}>
        <AppLightText>Dont get the code? Please press</AppLightText>
        <Text style={styles.resend}>Resend</Text>
      </View>
      <AppButton
        title="Submit"
        onPress={() => navigation.navigate("PersonnalInfo")}
      />
    </View>
  );
};

export default VerifyMobile;

const styles = StyleSheet.create({
  resend: {
    fontWeight: "600",
    color: "#34CA96",
    // marginVertical: "12",
  },
  spaceBelow: {
    marginBottom: 25,
  },
});
