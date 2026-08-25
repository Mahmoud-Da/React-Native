import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default function useNotifications(
  notificationListener
) {
  useEffect(() => {
    const registerForPushNotifications = async () => {
      try {
        const permission = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );

        if (!permission.granted) return;

        const token =
          await Notifications.getExpoPushTokenAsync();

        await expoPushTokensApi.register(token.data);
      } catch (error) {
        console.log(
          "Error getting a push token",
          error
        );
      }
    };

    registerForPushNotifications();

    let subscription;

    if (notificationListener) {
      subscription =
        Notifications.addNotificationResponseReceivedListener(
          notificationListener
        );
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [notificationListener]);
}