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
