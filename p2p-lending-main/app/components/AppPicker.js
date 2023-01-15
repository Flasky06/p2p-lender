import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AppPicker = ({ style }) => {
  return (
    <View style={[{ backgroundColor: "#fff" }, style]}>
      <Picker>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({});
