import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function AppPicker({ icon, placeholder }) {
  return (
    <View style={styles.container}>

      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}

      <AppText style={styles.text}>
        {placeholder}
      </AppText>

      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={colors.medium}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  text: {
    flex: 1,
  },

  icon: {
    marginRight: 10,
  },

});

export default AppPicker;
