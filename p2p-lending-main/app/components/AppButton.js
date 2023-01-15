import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import globalStyles from "../../globalStyles";

const AppButton = ({ title, onPress, style, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[globalStyles.primaryButton, styles.spaceBelow, style]}
    >
      <Text style={[styles.buttonText, props]}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 17,
  },
});
