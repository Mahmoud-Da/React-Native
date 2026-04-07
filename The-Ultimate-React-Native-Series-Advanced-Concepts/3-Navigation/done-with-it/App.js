import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/components/Screen";

const Stack = createStackNavigator();

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  );
};

const TweetDetails = () => {
  return (
    <Screen>
      <Text>Tweet Details</Text>
    </Screen>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
