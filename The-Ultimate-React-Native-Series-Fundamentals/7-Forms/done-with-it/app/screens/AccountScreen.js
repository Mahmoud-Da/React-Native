import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

import colors from "../config/colors";

const menuItems = [

  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },

];

function AccountScreen() {

  return (

    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subtitle="mosh@email.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              iconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>


      <ListItem
        title="Logout"
        iconComponent={
          <Icon
            name="logout"
            backgroundColor="#FFE66D"
          />
        }
      />
    </Screen>
  );
}


const styles = StyleSheet.create({

  screen: {
    backgroundColor: colors.light,
  },

  container: {
    marginVertical: 20,
  },

});

export default AccountScreen;
