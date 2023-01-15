import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const AppLightText = ({ children, style }) => {
  return <Text style={[styles.lightText, style]}>{children}</Text>;
};

export default AppLightText;

const styles = StyleSheet.create({
  lightText: {
    fontFamily: "Lato-300Light",
    fontSize: 13,
    color: "#292929",
    fontWeight: "100",
  },
});
