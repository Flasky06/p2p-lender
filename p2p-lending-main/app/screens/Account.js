import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";

import colors from "../config/colors";
import globalStyles from "../../globalStyles";

import AppMediumText from "../components/AppMediumText";
import AppText from "../components/AppText";
import AppHeaderText from "../components/AppHeaderText";
import AppLightText from "../components/AppLightText";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import { cardStyles } from "../styles/Card";

const Account = ({ navigation }) => {
  return (
    <View>
      <View
        style={[globalStyles.flexVertial, { justifyContent: "space-between" }]}
      >
        <View
          style={[
            globalStyles.flexVertial,
            styles.spaceBelow,
            { justifyContent: "space-between" },
          ]}
        >
          <View style={styles.profile}>
            <ImageBackground
              style={styles.profile}
              source={require("../assets/profile.jpg")}
              resizeMode="cover"
            ></ImageBackground>
          </View>
          <View>
            <AppMediumText>Martin Karani</AppMediumText>
            <AppText>Machakos</AppText>
          </View>
        </View>
        <AppHeaderText style={styles.creditScoreGrade}>A</AppHeaderText>
      </View>
      <Card style={styles.wallet}>
        <AppMediumText>Balance</AppMediumText>
        <Text style={styles.balance}>KSH 23,000</Text>
        <AppLightText style={{ color: colors.primary }}>
          +0.45%<Text style={{ color: colors.black }}>This Month</Text>
        </AppLightText>
        <AppHeaderText style={styles.walletCompany}>LENDY WALLET</AppHeaderText>
      </Card>
      <View
        style={[globalStyles.flexVertial, { justifyContent: "space-around" }]}
      >
        <Pressable
          onPress={() => navigation.navigate("AddFunds")}
          style={[styles.addFundBtn, styles.btn, styles.spaceBelow]}
        >
          <Text style={styles.addFundText}>ADD FUNDS</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Withdraw")}
          style={[styles.withdrawBtn, styles.btn, styles.spaceBelow]}
        >
          <Text style={styles.withdrawText}>WITHDRAW</Text>
        </Pressable>
      </View>
      <View style={[globalStyles.flexVertial, { marginBottom: 5 }]}>
        <AppMediumText
          style={[{ marginRight: 10 }, styles.tab, styles.activeTab]}
        >
          Investment
        </AppMediumText>
        <AppMediumText style={[styles.tab, styles.notActiveTab]}>
          Loans
        </AppMediumText>
      </View>

      {/* INVESTMENT CARD */}
      <Card style={cardStyles.card}>
        <View style={[globalStyles.flexVertial, cardStyles.loanCardHead]}>
          <AppMediumText style={cardStyles.loanId}>LOAN ID 34579</AppMediumText>
          <View>
            <Text style={cardStyles.creditScoreGrade}>A</Text>
          </View>
        </View>
        <View style={[globalStyles.flexVertial, cardStyles.loanWrapper]}>
          <View style={cardStyles.loanWrapperLeft}>
            <AppText>Invested principal</AppText>
            <AppText>Interest</AppText>
            <AppText>Due Day</AppText>
            <AppText>Community</AppText>
          </View>
          <View>
            <AppText>Ksh 3,000</AppText>
            <AppText>Ksh 318</AppText>
            <AppText>12 Jan 2021</AppText>
            <AppText>Kilimali</AppText>
          </View>
        </View>
      </Card>
      {/* LOAN CARD */}
      <Card style={[cardStyles.card, { paddingBottom: 50 }]}>
        <View style={[globalStyles.flexVertial, cardStyles.loanCardHead]}>
          <AppMediumText style={cardStyles.loanId}>LOAN ID 34579</AppMediumText>
          <View>
            <Text style={cardStyles.creditScoreGrade}>A</Text>
          </View>
        </View>
        <View style={[globalStyles.flexVertial, cardStyles.loanWrapper]}>
          <View style={cardStyles.loanWrapperLeft}>
            <AppText>Total Amount Borrowwed</AppText>
            <AppText>Interest</AppText>
            <AppText>Due Day</AppText>
            <AppText>Community</AppText>
            <AppText>Payment Process</AppText>
          </View>
          <View>
            <AppText>Ksh 3,000</AppText>
            <AppText>Ksh 318</AppText>
            <AppText>12 Jan 2021</AppText>
            <AppText>Kilimali</AppText>
            <AppText>10%</AppText>
          </View>
        </View>
        <Pressable
          onPress={() => console.log("jj")}
          style={[styles.pay, styles.btn, styles.spaceBelow]}
        >
          <Text style={styles.addFundText}>Pay</Text>
        </Pressable>
      </Card>

      {/* Transactions History */}

      <AppHeaderText style={styles.spaceBelow}>
        Transactions History
      </AppHeaderText>
      <View
        style={{
          borderLeftWidth: 2,
          borderColor: colors.primary,
          paddingLeft: 6,
          marginBottom: 15,
        }}
      >
        <AppText>Withdrawal</AppText>
        <AppText>
          Amount:: <Text>Ksh 2,000</Text>
        </AppText>
        <AppText>
          Day :: <Text>12 Dec 2021 at 12:02 am</Text>
        </AppText>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  addWithdrawFunds: { paddingHorizontal: 15 },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    fontWeight: "bold",
  },
  pay: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },
  addFundBtn: {
    backgroundColor: colors.primary,
  },
  addFundText: {
    color: colors.white,
  },
  withdrawBtn: {
    backgroundColor: "#D6D6D6",
  },
  withdrawText: {},
  spaceBelow: {
    marginBottom: 10,
  },
  creditScoreGrade: {
    fontFamily: "Lota_700Bold", //remember to changeing to a different font
    fontWeight: "700",
    fontSize: 25,
  },
  withdrawBtn: {},
  profile: {
    height: 37,
    width: 37,
    overflow: "hidden",
    borderRadius: 150 / 2,
    borderWidth: 1,
    borderColor: colors.primary,
    marginRight: 10,
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  wallet: {
    height: 110,
    marginBottom: 15,
  },
  walletCompany: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});
