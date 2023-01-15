import { StyleSheet, Text, View } from "react-native";
import React from "react";

function AppText({ children, style }) {
  return <Text style={[styles.baseText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto",
  },
});

export default AppText;
