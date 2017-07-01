import * as electron from 'electron'
import MainWindow from './window'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', () => {
  const { size } = electron.screen.getPrimaryDisplay()
  const win = new MainWindow(size, BrowserWindow)
  win.maximize()
  win.subscribe()
})
