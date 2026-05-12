import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";
import Button from "../components/Button";

import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    const response = await listingsApi.getListings();

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, item)
            }
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
