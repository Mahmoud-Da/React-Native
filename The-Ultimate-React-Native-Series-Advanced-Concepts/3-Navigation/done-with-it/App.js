import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/components/Screen";

const Stack = createStackNavigator();

const Tweets = ({ navigation }) => (
  <Screen>
    <Button
      title="View Tweet"
      onPress={() =>
        navigation.navigate("TweetDetails", { id: 1 })
      }
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet ID: {route.params.id}</Text>
  </Screen>
);

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
    />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;
