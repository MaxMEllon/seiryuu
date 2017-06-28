import { ipcMain } from 'electron'
import menuInitalizer from '../menu'
import * as twitter from '../twitter'

type WindowCreator = new (opt?: Electron.BrowserWindowConstructorOptions) => (
  Electron.BrowserWindow
)
const env = process.env.NODE_ENV === 'production'

const ipcSubscrbe = (mainWindow: Electron.BrowserWindow) => {
  ipcMain.on('boot', (event) => {
    mainWindow.on('close', () => {
      event.sender.send('quit', 'ping')
      twitter.closeSocket()
    })
    twitter.deliverToRenderer(event.sender)
  })

  ipcMain.on('config/modify', (event, args) => {
    mainWindow.webContents.send('config/update', args)
  })
}

export default function windowInitalizer(size: Electron.Size, windowCreator: WindowCreator) {
  let mainWindow: any = new windowCreator({
    alwaysOnTop: env,
    frame: env,
    height: size.height,
    resizable: env,
    show: true,
    transparent: true,
    width: size.width,
  })

  mainWindow.maximize()
  if (env) mainWindow.setIgnoreMouseEvents(true)
  mainWindow.loadURL('http://localhost:3000')
  if (process.env.NODE_ENV !== 'production') mainWindow.openDevTools()
  mainWindow.on('closed', () => (mainWindow = null))

  menuInitalizer()

  ipcSubscrbe(mainWindow)
}
