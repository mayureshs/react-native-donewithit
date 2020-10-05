import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mayuresh Sawardekar"
            subTitle="5 Listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListDetailsScreen;
