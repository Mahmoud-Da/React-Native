import React from "react";
import { View, Text, Button } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

function App() {
  const netInfo = useNetInfo();

  return (
    <View>
      {!netInfo.isInternetReachable && (
        <Text>No Internet Connection</Text>
      )}

      <Button
        title="Upload"
        disabled={!netInfo.isInternetReachable}
      />
    </View>
  );
}

export default App;