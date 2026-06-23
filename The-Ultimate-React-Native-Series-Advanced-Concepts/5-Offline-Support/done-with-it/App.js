import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <OfflineNotice />

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}