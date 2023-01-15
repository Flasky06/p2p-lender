import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";

import AppLightText from "../components/AppLightText";
import AppHeaderText from "../components/AppHeaderText";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppPicker from "../components/AppPicker";
import colors from "../config/colors";

const PersonnalInfo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <AppHeaderText style={[styles.spaceBelow, styles.spaceUp]}>
        Personnal Details
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
        style={styles.spaceBelow}
        value=""
        label="First Name"
        onChange={() => console.log("they")}
      />
      <AppInput
        style={styles.spaceBelow}
        value=""
        label="Middle Name(optional)"
        onChange={() => console.log("they")}
      />
      <AppInput
        value=""
        style={styles.spaceBelow}
        label="Last Name"
        onChange={() => console.log("they")}
      />
      <AppInput
        value=""
        style={styles.spaceBelow}
        label="ID Number"
        onChange={() => console.log("they")}
        keyboardType="numeric"
      />
      <AppInput
        value=""
        style={styles.spaceBelow}
        label="Email"
        onChange={() => console.log("they")}
        keyboardType="email-address"
      />
      <AppText>Education</AppText>
      <AppPicker style={styles.spaceBelow} />
      <AppButton
        title="Submit"
        onPress={() => navigation.navigate("WorkInfo")}
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
