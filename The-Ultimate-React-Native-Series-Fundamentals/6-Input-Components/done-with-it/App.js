import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

function App() {

  const [isNew, setIsNew] = useState(false);

  return (

    <View style={styles.container}>
      <Switch
        value={isNew}
        onValueChange={setIsNew}
      />
    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

export default App;
