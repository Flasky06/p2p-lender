import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";

import AppLightText from "../components/AppLightText";
import AppText from "../components/AppText";
import AppHeaderText from "../components/AppHeaderText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppPicker from "../components/AppPicker";

const WorkInfo = ({ navigation }) => {
  const DATA = [
    { id: "1", title: "Monthly" },
    { id: "2", title: "Weekly" },
    { id: "3", title: "Hourly" },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        marginRight: 10,
        borderRadius: 5,
      }}
    >
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <AppHeaderText style={[styles.spaceBelow, styles.spaceUp]}>
        Work information
      </AppHeaderText>

      <View
        style={[
          styles.spaceBelow,
          { backgroundColor: colors.white, padding: 10, borderRadius: 5 },
        ]}
      >
        <AppLightText>
          Enter your First name,last name as per your ID to qualify for a loan
        </AppLightText>
      </View>
      <AppText>Empoyment</AppText>
      <AppPicker style={styles.spaceBelow} />
      <AppText>Frequency of hiring</AppText>
      <View style={styles.spaceBelow}>
        <FlatList
          numColumns={3}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <AppText>Salary per Month</AppText>
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

      <AppButton
        title="Submit"
        onPress={() => navigation.navigate("SetPassword")}
        style={styles.spaceUp}
      />
    </SafeAreaView>
  );
};

export default WorkInfo;

const styles = StyleSheet.create({
  spaceBelow: {
    marginBottom: 10,
  },
  spaceUp: {
    marginTop: 10,
  },
});
