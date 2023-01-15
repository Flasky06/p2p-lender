import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Card from "../components/Card";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import AppHeaderText from "../components/AppHeaderText";
import AppText from "../components/AppText";

const WithDraw = () => {
  return (
    <View>
      <Card>
        <AppHeaderText>Adding Funds</AppHeaderText>
        <AppText>
          Your available funds <Text>Ksh 1,000</Text>
        </AppText>
        <AppInput label="Enter Amount" />
        <AppText>
          Will be depositing from phone number +25701***316 Mpesa
        </AppText>
        <AppButton
          title="WithDraw"
          onPress={() => console.log("withdrawn succufully")}
        />
      </Card>
    </View>
  );
};

export default WithDraw;

const styles = StyleSheet.create({});
