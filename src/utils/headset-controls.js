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
      console.log('done');
    } else {
      console.log('not');
    }
  });
};
