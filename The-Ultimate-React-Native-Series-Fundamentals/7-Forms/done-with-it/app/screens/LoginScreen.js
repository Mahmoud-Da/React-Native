import React, { useState } from "react";
import {
  StyleSheet,
  Image
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      />

      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={text => setEmail(text)}

      />

      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        onChangeText={text => setPassword(text)}
      />

      <AppButton
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </Screen>

  );

}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});

export default LoginScreen;