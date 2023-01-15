import { StyleSheet, Text, View } from "react-native";
import React from "react";

function AppText({ style, children }) {
  return <Text style={[styles.headerText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default AppText;
