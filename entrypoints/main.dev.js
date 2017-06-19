const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready',  () => {
  mainWindow = new BrowserWindow({ width: 800,  height: 800 });
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.on('closed', () => (mainWindow = null));
});

app.on('window-all-closed', () => app.quit());
