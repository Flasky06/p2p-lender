import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

import Card from "../components/Card";
import AppLightText from "../components/AppLightText";
import AppMediumText from "../components/AppMediumText";
import AppInput from "../components/AppInput";
import AppText from "../components/AppHeaderText";
import globalStyles from "../../globalStyles";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppHeaderText from "../components/AppHeaderText";

const LoanRequest = () => {
  return (
    <View>
      <View
        style={[globalStyles.flexVertial, { justifyContent: "space-between" }]}
      >
        <View
          style={[
            globalStyles.flexVertial,
            styles.spaceBelow,
            { justifyContent: "space-between" },
          ]}
        >
          <View style={styles.profile}>
            <ImageBackground
              style={styles.profile}
              source={require("../assets/profile.jpg")}
              resizeMode="cover"
            ></ImageBackground>
          </View>
          <View>
            <AppMediumText>Martin Karani</AppMediumText>
            <AppText>Machakos</AppText>
          </View>
        </View>
        <AppHeaderText style={styles.creditScoreGrade}>A</AppHeaderText>
      </View>
      <Card>
        <AppLightText>
          You are borrowing from one or many investor in kIlimani community and
          interent rate will apply depending on your credit score and loan
          duration
        </AppLightText>
      </Card>
      <AppMediumText style={styles.linkText}>
        How to reduce your interent rate?
      </AppMediumText>
      <AppMediumText>Loan Amount</AppMediumText>
      <View
        style={[
          globalStyles.inputBox,
          globalStyles.flexVertial,
          styles.spaceBelow,
        ]}
      >
        <Text style={{ marginRight: 5 }}>Ksh</Text>
        <TextInput
          //   onChangeText={onChangeNumber}
          //   value={number}
          style={[globalStyles.input]}
          keyboardType="numeric"
        />
      </View>
      <View style={[globalStyles.flexVertial]}>
        <AppInput
          style={styles.spaceBelow}
          value=""
          label="Replayment Period"
          onChange={() => console.log("they")}
        />
        <AppText style={{ marginRight: 0 }}>Days</AppText>
      </View>
      <AppInput
        style={styles.spaceBelow}
        value=""
        label="By when do you need the loan"
        onChange={() => console.log("they")}
      />
      <Card>
        <AppLightText>
          After getting the loan you will pay with an interent of 12%. Totally
          to Ksh 12,300 Deny in paying the loan you will iccur a fee 1.Money
          will be sent to your wallet once invector(s) fully fund you loan
        </AppLightText>
      </Card>
      <View
        style={[globalStyles.flexVertial, { marginTop: 15, marginBottom: 50 }]}
      >
        <Ionicons
          name="ios-checkmark-circle-sharp"
          size={15}
          color={colors.primary}
        />
        <AppLightText>
          i agree with the
          <Text style={{ color: colors.primary, paddingLeft: 4 }}>
            agreement
          </Text>
        </AppLightText>
      </View>
      <AppButton title="Borrow" onPress={() => console.log("Borrow Clicked")} />
    </View>
  );
};

export default LoanRequest;

const styles = StyleSheet.create({
  linkText: {
    textDecorationLine: "underline",
    paddingVertical: 10,
    color: colors.primary,
  },
  spaceBelow: {
    marginBottom: 10,
  },
  creditScoreGrade: {
    fontFamily: "Lota_700Bold", //remember to changeing to a different font
    fontWeight: "700",
    fontSize: 25,
  },
  profile: {
    height: 37,
    width: 37,
    overflow: "hidden",
    borderRadius: 150 / 2,
    borderWidth: 1,
    borderColor: colors.primary,
    marginRight: 10,
  },
});
