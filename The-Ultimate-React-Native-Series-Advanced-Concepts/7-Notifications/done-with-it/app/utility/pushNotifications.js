const { Expo } = require("expo-server-sdk");

const expo = new Expo();

const sendPushNotification = async (pushToken, message) => {
  if (!Expo.isExpoPushToken(pushToken)) {
    throw new Error("Invalid Expo push token");
  }

  const notification = {
    to: pushToken,
    sound: "default",
    ...message,
  };

  const messages = [notification];

  const chunks = expo.chunkPushNotifications(messages);

  for (const chunk of chunks) {
    try {
      const tickets = await expo.sendPushNotificationsAsync(
        chunk
      );

      console.log("Push notification tickets:", tickets);
    } catch (error) {
      console.error(
        "Error sending push notification:",
        error
      );
    }
  }
};

module.exports = {
  sendPushNotification,
};