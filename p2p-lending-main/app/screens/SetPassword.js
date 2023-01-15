import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";

import AppLightText from "../components/AppLightText";
import AppHeaderText from "../components/AppHeaderText";
import App from "../../App";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import colors from "../config/colors";

const PersonnalInfo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <AppHeaderText style={[styles.spaceBelow, styles.spaceUp]}>
        Set Password
      </AppHeaderText>
      <View
        style={[
          styles.spaceBelow,
          { backgroundColor: colors.white, padding: 10, borderRadius: 5 },
        ]}
      >
        <AppLightText>
          Enter your First name,last name as per your ID to qualify for a loan
        </AppLightText>
      </View>

      <AppInput
        label="Password"
        onChange={() => console.log("ye")}
        secureTextEntry={true}
        style={styles.spaceBelow}
      />
      <AppInput
        label="Confirm Password"
        onChange={() => console.log("ye")}
        secureTextEntry={true}
        style={styles.spaceBelow}
      />
      <AppButton
        title="Complete"
        onPress={() => navigation.navigate("LoanListings")}
      />
    </SafeAreaView>
  );
};

export default PersonnalInfo;

const styles = StyleSheet.create({
  spaceBelow: {
    marginBottom: 10,
  },
  spaceUp: {
    marginTop: 10,
  },
});
