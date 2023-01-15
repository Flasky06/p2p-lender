import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppHeaderText from "../components/AppHeaderText";
import AppMediumText from "../components/AppMediumText";
import AppLightText from "../components/AppLightText";
import globalStyles from "../../globalStyles";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const EnterMobile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <AppHeaderText style={[styles.spaceBelow, styles.spaceUp]}>
        Lendy Account Registisation
      </AppHeaderText>
      <AppMediumText>Enter your Mobile Number</AppMediumText>
      <Text>We'll send you an SMS to verify your number</Text>

      <View
        style={[
          globalStyles.inputBox,
          globalStyles.flexVertial,
          styles.spaceBelow,
        ]}
      >
        <Text style={{ marginRight: 5 }}>+254</Text>
        <TextInput
          //   onChangeText={onChangeNumber}
          //   value={number}
          style={[globalStyles.input]}
          keyboardType="numeric"
        />
      </View>
      <View style={[globalStyles.flexVertial, styles.spaceBelow]}>
        <Ionicons
          name="ios-checkmark-circle-sharp"
          size={15}
          color={colors.primary}
        />
        <AppLightText>
          i have read and agree to Lendy's{" "}
          <Text style={{ color: colors.primary }}>Terms of Service</Text>
        </AppLightText>
      </View>
      <AppButton
        title="Verify"
        onPress={() => navigation.navigate("VerifyMobile")}
      />
      <AppText>
        Already registered?
        <Text
          style={{ fontWeight: "bold", color: "#34CA96", marginVertical: "12" }}
        >
          Login Now
        </Text>
      </AppText>
    </SafeAreaView>
  );
};

export default EnterMobile;

const styles = StyleSheet.create({
  spaceBelow: {
    marginBottom: 25,
  },
  spaceUp: {
    marginTop: 10,
  },
});
