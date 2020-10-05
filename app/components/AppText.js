import React from "react";
import { Text, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

Platform.select({
  ios: { fontSize: 20, fontFamily: "Avenir" },
  android: { fontSize: 18, fontFamily: "Roboto" },
});

const styles = StyleSheet.create({
  // text: {
  //   color: colors.black,
  //   ...Platform.select({
  //     ios: { fontSize: 20, fontFamily: "Avenir" },
  //     android: { fontSize: 18, fontFamily: "Roboto" },
  //   }),
});

export default AppText;
