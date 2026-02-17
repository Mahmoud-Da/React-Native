import React, { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";

function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        onChangeText={(text) => setFirstName(text)}
        maxLength={20}
        keyboardType="default"
        clearButtonMode="always"
      />
      <Text>{firstName}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default App;
