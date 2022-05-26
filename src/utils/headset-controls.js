export const setHeadsetStatus = (setHeadsetName) => {
  window.electron.ipcRenderer.sendMessage('ipc-example', ['status']);
  window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    if (arg === 'Unavailable') {
      setHeadsetName(null);
    } else {
      setHeadsetName(arg);
    }
  });
};
