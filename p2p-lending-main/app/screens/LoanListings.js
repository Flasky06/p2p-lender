import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import LoanListing from "../components/LoanListing";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const LoanListings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="menu" size={30} color="black" />
          <Text style={styles.communityName}>Katoloni</Text>
        </View>
        <View style={styles.navbarRight}>
          <Ionicons name="notifications-outline" size={27} color="black" />
          <Pressable onPress={() => navigation.navigate("Account")}>
            <View style={styles.imgContainer}>
              <ImageBackground
                style={styles.profile}
                source={require("../assets/profile.jpg")}
                resizeMode="cover"
              ></ImageBackground>
            </View>
          </Pressable>
        </View>
      </View>
      <LoanListing />
      <View style={styles.leftButtonContainer}>
        <AppButton
          title="Apply For a Loan"
          onPress={() => navigation.navigate("LoanRequest")}
          style={styles.floatingButton}
          // styleText={styles.floatingButtonText}
        />
      </View>
    </View>
  );
};

export default LoanListings;

const styles = StyleSheet.create({
  container: { flex: 1 },
  floatingButton: {
    paddingHorizontal: 10,
  },
  floatingButtonText: {
    fontSize: 10,
  },
  imgContainer: { marginLeft: 5 },
  profile: {
    height: 37,
    width: 37,
    overflow: "hidden",
    borderRadius: 150 / 2,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  navbarRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  communityName: {
    fontSize: 20,
    fontWeight: "700",
  },
  leftButtonContainer: {
    position: "absolute",
    // width: 50,
    // height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 30,
  },
});
