import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
