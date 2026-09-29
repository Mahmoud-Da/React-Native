import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default ActivityIndicator;
