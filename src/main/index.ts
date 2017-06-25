import * as electron from 'electron'
import windowInitalizer from './window'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', () => {
  const { size } = electron.screen.getPrimaryDisplay()
  windowInitalizer(size, BrowserWindow)
})
