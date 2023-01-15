import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppMediumText = ({ children, style }) => {
  return <Text style={[styles.mediumText, style]}>{children}</Text>;
};

export default AppMediumText;

const styles = StyleSheet.create({
  mediumText: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "600",
    color: "#3b3c36",
  },
});
