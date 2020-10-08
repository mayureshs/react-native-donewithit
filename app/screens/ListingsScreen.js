import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={getListingsApi.loading} />
      <AppScreen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Could'nt retrieve the listings</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumnailUrl={item.images[0].thumnailUrl}
            />
          )}
        />
      </AppScreen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
