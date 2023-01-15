import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "./AppHeaderText";
import AppMediumText from "./AppMediumText";
import AppLightText from "./AppLightText";
import globalStyles from "../../globalStyles";
import Card from "./Card";
import { cardStyles } from "../styles/Card";
import { useNavigation } from "@react-navigation/native";

const LoanListing = () => {
  const navigation = useNavigation();
  const DATA = [
    { id: "1", title: "40% Funded" },
    { id: "2", title: "3 Investors" },
    { id: "3", title: "1 hour ago" },
  ];
  const loadData = [{ id: "1" }, { id: "2" }, { id: "3" }];
  const renderItem = ({ item }) => (
    <View style={cardStyles.loanAtt}>
      <AppLightText>{item.title}</AppLightText>
    </View>
  );
  const renderCard = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("LoanDetails")}>
      <Card style={cardStyles.card}>
        <View style={[globalStyles.flexVertial, cardStyles.loanCardHead]}>
          <AppMediumText style={cardStyles.loanId}>LOAN ID 34579</AppMediumText>
          <View>
            <Text style={cardStyles.creditScoreGrade}>A</Text>
          </View>
        </View>
        <View style={[globalStyles.flexVertial, cardStyles.loanWrapper]}>
          <View style={cardStyles.loanWrapperLeft}>
            <AppText>Interent rate</AppText>
            <AppText>Term</AppText>
            <AppText>Available Amount</AppText>
          </View>
          <View>
            <AppText>12%</AppText>
            <AppText>23 Days</AppText>
            <AppMediumText>Ksh 3,000</AppMediumText>
          </View>
        </View>
        <FlatList
          numColumns={3}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </Card>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={loadData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default LoanListing;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  loanId: {
    color: colors.primary,
  },
  loanWrapper: {
    paddingVertical: 5,
  },
  loanWrapperLeft: {
    marginRight: 140,
  },
  loanAtt: {
    paddingVertical: 2,
    fontFamily: "Lato_300Light",
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d9d3d7",
  },
  loanCardHead: {
    justifyContent: "space-between",
  },
  creditScoreGrade: {
    fontFamily: "Lota_700Bold", //remember to changeing to a different font
    fontWeight: "700",
    fontSize: 20,
  },
});
