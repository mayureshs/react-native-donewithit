import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import AppText from "./AppText";

const AppPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default AppPickerItem;