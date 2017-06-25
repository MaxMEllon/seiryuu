const electron = require('electron');
const { ipcMain } = require('electron');
const Twitter = require('twitter');
require('dotenv').config({ path: __dirname + '/../.env' })

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const client = new Twitter({
  access_token_key: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET_KEY,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY
})

const stream = client.stream('user')

app.on('ready', () => {
  const size = electron.screen.getPrimaryDisplay().size
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    'web-preferences': {
      'web-security': false
    },
  });
  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.maximize();
  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.loadURL('http://localhost:3000');
  ipcMain.on('boot', (event, arg) => {
    stream.on('data', (e) => {
      event.sender.send('tweet', JSON.stringify(e));
    })
  })
});


app.on('window-all-closed', () => app.quit());
