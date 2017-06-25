import { ipcMain } from 'electron'
import * as twitter from '../twitter'

type WindowCreator = new (opt?: Electron.BrowserWindowConstructorOptions) => (
  Electron.BrowserWindow
)

export default function windowInitalizer(size: Electron.Size, windowCreator: WindowCreator) {
  let mainWindow: any = new windowCreator({
    alwaysOnTop: true,
    frame: false,
    height: size.height,
    resizable: false,
    show: true,
    transparent: true,
    width: size.width,
  })

  mainWindow.maximize()
  mainWindow.setIgnoreMouseEvents(true)
  mainWindow.loadURL('http://localhost:3000')

  ipcMain.on('boot', (event) => {
    mainWindow.on('close', () => {
        event.sender.send('quit', 'ping')
        twitter.closeSocket()
    })
    twitter.deliverToRenderer(event.sender)
  })

  mainWindow.on('closed', () => (mainWindow = null))
}
