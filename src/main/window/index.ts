import { ipcMain } from 'electron'
import menuInitalizer from '../menu'
import Twitter from '../twitter'

type WindowCreator = new (opt?: Electron.BrowserWindowConstructorOptions) => (
  Electron.BrowserWindow
)

const env = process.env.NODE_ENV === 'production'

export default class MainWindow {
  win: any
  twitter: Twitter

  constructor(size: Electron.Size, windowCreator: WindowCreator) {
    this.win = new windowCreator({
      alwaysOnTop: env,
      frame: env,
      height: size.height,
      resizable: env,
      show: true,
      transparent: true,
      width: size.width,
    })
    if (env) this.win.setIgnoreMouseEvents(true)
    if (!env) this.win.openDevTools()
    this.win.loadURL('http://localhost:3000')
    this.win.on('closed', () => (this.win = null))
    this.twitter = new Twitter()
    menuInitalizer()
  }

  maximize() {
    this.win.maximize()
  }

  subscribe() {
    ipcMain.on('boot', (event) => {
      this.win.on('close', () => {
        event.sender.send('quit', 'ping')
        this.twitter.disconnectUserStream()
      })
      this.twitter.subscribeUserStream(event.sender)
    })

    ipcMain.on('config/modify', (event, args) => {
      this.win.webContents.send('config/update', args)
    })
  }
}
