export const setHeadsetStatus = (setHeadsetName, setHeadsetExists) => {
  window.electron.ipcRenderer.sendMessage('status', ['status']);
  window.electron.ipcRenderer.once('status', (arg) => {
    if (arg === 'Unavailable') {
      setHeadsetName(null);
      setHeadsetExists(false);
    } else {
      setHeadsetName(arg);
      setHeadsetExists(true);
    }
  });
};

export const setBattery = (setBatteryPercentage) => {
  window.electron.ipcRenderer.sendMessage('battery', ['ping']);
  window.electron.ipcRenderer.once('battery', (arg) => {
    setBatteryPercentage(parseInt(arg));
  });
};

export const setHeadsetSidetoneVolume = (sidetoneVolume) => {
  const adjustedSidetone = parseInt((128 * (sidetoneVolume / 100)).toString());

  window.electron.ipcRenderer.sendMessage('sidetone', [
    adjustedSidetone.toString(),
  ]);
  window.electron.ipcRenderer.once('sidetone', (arg) => {
    if (arg === 'Success!') {
      console.log('sidetone done');
    } else {
      console.log('sidetone failed');
    }
  });
};

export const setHeadsetRGB = (rGBStatus) => {
  const status = rGBStatus ? 1 : 0;
  window.electron.ipcRenderer.sendMessage('rgb', [status.toString()]);
  window.electron.ipcRenderer.once('rgb', (arg) => {
    if (arg === 'Success!') {
      console.log('rgb done');
    } else {
      console.log('rgb failed');
    }
  });
};

export const setHeadsetSoundNotifications = (notificationStatus) => {
  const status = notificationStatus ? 1 : 0;
  window.electron.ipcRenderer.sendMessage('notification', [status.toString()]);
  window.electron.ipcRenderer.once('notification', (arg) => {
    if (arg === 'Success!') {
      console.log('notification done');
    } else {
      console.log('notification failed');
    }
  });
};

export const displayLowBatteryNotification = () => {
  const NOTIFICATION_TITLE = 'Low Battery';
  const NOTIFICATION_BODY =
    'The battery is critically low. Please consider charging the headsets.';
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
};

export const displayRGBNotification = (rGBStatus) => {
  const status = rGBStatus ? 'ON' : 'OFF';
  const NOTIFICATION_TITLE = 'RGB ' + status;
  const NOTIFICATION_BODY = 'The RGB lighting is being turned ' + status;
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
};

export const displaySoundNotificationsNotification = (
  soundNotificationStatus
) => {
  const status = soundNotificationStatus ? 'ON' : 'OFF';
  const NOTIFICATION_TITLE = 'Sound Notifications ' + status;
  const NOTIFICATION_BODY =
    'The sound notifications are being turned ' + status;
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
};
