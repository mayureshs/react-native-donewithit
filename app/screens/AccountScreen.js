import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";
import ListItemSeperator from "../components/lists/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];

const AccountScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mayuresh Sawardekar"
          subTitle="mayuresh@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Logout"
          IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        ></ListItem>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  logout: {
    marginTop: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
