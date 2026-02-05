import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        />
        <Text>Sell What You Don’t Need</Text>
      </View>

      <View style={styles.loginButton} />

      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
