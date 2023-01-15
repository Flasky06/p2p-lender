import { StyleSheet } from "react-native";
import colors from "./app/config/colors";

export default globalStyles = StyleSheet.create({
  lightText: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "200",
  },
  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 4,
  },
  input: {
    width: "100%",
  },
  flexVertial: {
    flexDirection: "row",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    borderRadius: 4,
    alignItems: "center",
  },
});
