import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import globalStyles from "../../globalStyles";
import AppText from "./AppText";

const AppInput = ({ label, value, onChange, style, ...props }) => {
  return (
    <View style={style}>
      <AppText>{label}</AppText>
      <View style={globalStyles.inputBox}>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={globalStyles.input}
          {...props}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({});
