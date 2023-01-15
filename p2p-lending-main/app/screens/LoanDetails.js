import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import AppMediumText from "../components/AppMediumText";
import AppHeaderText from "../components/AppHeaderText";
import globalStyles from "../../globalStyles";
import Card from "../components/Card";
import AppText from "../components/AppHeaderText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const LoanDetails = () => {
  const DATA = [
    { id: "1", title: "40% Funded" },
    { id: "2", title: "3 Investors" },
    { id: "3", title: "1 hour ago" },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        borderLeftWidth: 2,
        borderColor: colors.primary,
        paddingLeft: 6,
        marginBottom: 15,
      }}
    >
      <AppText>
        Community Group :: <Text>Kilimani</Text>
      </AppText>
      <AppText>
        Loan Amount:: <Text>Ksh 2,000</Text>
      </AppText>
      <AppText>
        Term :: <Text>Jan 04 - Feb 04</Text>
      </AppText>
      <AppText>
        Repayment Score :: <Text>100%</Text>
      </AppText>
    </View>
  );

  return (
    <View>
      <View
        style={[globalStyles.flexVertial, { justifyContent: "space-between" }]}
      >
        <AppMediumText>LOAN ID 35900</AppMediumText>
        <AppHeaderText style={styles.creditScoreGrade}>A</AppHeaderText>
      </View>
      <Card style={globalStyles.flexVertial}>
        <View style={{ marginRight: 160 }}>
          <AppText>Amount</AppText>
          <AppText>Interent rate</AppText>
          <AppText>Term</AppText>
          <AppText>No of Investors</AppText>
          <AppText>Loan Due on</AppText>
        </View>
        <View>
          <AppText>12000</AppText>
          <AppText>10%</AppText>
          <AppText>42 Days</AppText>
          <AppText>5</AppText>
          <AppText>12/4/2022</AppText>
        </View>
      </Card>
      <AppMediumText style={styles.titleSpace}>LOAN PURPOSE</AppMediumText>
      <Card>
        <AppText>I want a loan for paying my children school </AppText>
      </Card>
      <AppMediumText style={styles.titleSpace}>BORROWER DETAILS</AppMediumText>
      <Card
        style={[globalStyles.flexVertial, { justifyContent: "space-between" }]}
      >
        <View>
          <AppText>Income Source</AppText>
          <AppText>Number of Loan Taken</AppText>
          <AppText>Active Loans</AppText>
          <AppText>Repayment Score</AppText>
          <AppText>Employment</AppText>
          <AppText>Customer Since</AppText>
        </View>
        <View>
          <AppText>120,000</AppText>
          <AppText>3</AppText>
          <AppText>0</AppText>
          <AppText>79%</AppText>
          <AppText>Software Engineer</AppText>
          <AppText>Jan 2019</AppText>
        </View>
      </Card>
      <AppMediumText style={{ paddingTop: 5 }}>BORROWER HISTOY</AppMediumText>
      <View style={[globalStyles.flexVertial, { marginBottom: 5 }]}>
        <AppMediumText
          style={[{ marginRight: 10 }, styles.tab, styles.activeTab]}
        >
          Paid Loans
        </AppMediumText>
        <AppMediumText style={[styles.tab, styles.notActiveTab]}>
          Active Loans
        </AppMediumText>
      </View>
      <Card>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Card>
     
    </View>
  );
};

export default LoanDetails;

const styles = StyleSheet.create({
  creditScoreGrade: {
    fontFamily: "Lota_700Bold", //remember to changeing to a different font
    fontWeight: "700",
    fontSize: 25,
  },
  tab: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  activeTab: {
    backgroundColor: colors.white,
  },
  notActiveTab: {
    borderWidth: 1,
    borderColor: "#DFDDDD",
  },
  titleSpace: {
    paddingVertical: 5,
  },
});
