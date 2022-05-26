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
