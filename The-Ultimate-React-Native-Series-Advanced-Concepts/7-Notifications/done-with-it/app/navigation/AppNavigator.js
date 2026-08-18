import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

async function registerForPushNotificationsAsync() {
  try {
    // Push notifications require a physical device.
    if (!Device.isDevice) {
      console.log(
        "Push notifications require a physical device."
      );
      return;
    }

    // Check existing notification permission.
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;

    // Ask the user for permission if we don't have it yet.
    if (existingStatus !== "granted") {
      const { status } =
        await Notifications.requestPermissionsAsync();

      finalStatus = status;
    }

    // Permission was denied.
    if (finalStatus !== "granted") {
      console.log("Notification permission not granted.");
      return;
    }

    // Get the Expo push notification token.
    const tokenData =
      await Notifications.getExpoPushTokenAsync();

    const token = tokenData.data;

    console.log("Expo Push Token:", token);

    return token;
  } catch (error) {
    console.log(
      "Error getting a push notification token:",
      error
    );
  }
}

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() =>
                navigation.navigate(routes.LISTING_EDIT)
              }
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
