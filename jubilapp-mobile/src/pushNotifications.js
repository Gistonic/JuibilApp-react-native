import {Permissions, Notifications} from 'expo';
import {request} from "./request";

export const reportPushToken = async () => {
  const {status: existingStatus} = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();
  console.log(`[PUSH NOTIFICATIONS] About to send push token ${token}`);

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  await request('/profile', 'PATCH', {
    pushToken: token
  });
  console.log(`[PUSH NOTIFICATIONS] Sent push token ${token}`);
}
