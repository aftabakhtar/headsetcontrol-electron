export const getHeadsetName = () => {
  window.electron.ipcRenderer.sendMessage('ipc-example', ['status']);
  window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
};
