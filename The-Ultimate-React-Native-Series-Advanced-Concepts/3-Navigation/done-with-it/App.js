import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/components/Screen";

const Stack = createStackNavigator();

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  );
};

const Tweets = () => (
  <Screen>
    <Link />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;
