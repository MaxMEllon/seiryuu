const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
  });
  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.maximize();
  mainWindow.loadURL('http://localhost:3000');
});

app.on('window-all-closed', () => app.quit());
