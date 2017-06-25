import * as electron from 'electron'

const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow
const Menu: typeof Electron.Menu = electron.Menu

const templateMenu: Electron.MenuItemConstructorOptions[] = [
  {
    label: 'config',
    submenu: [
      {
        label: 'edit',
        click() {
          const configWindow: Electron.BrowserWindow = new BrowserWindow({
            frame: false,
            height: 600,
            resizable: false,
            width: 400,
          })
          configWindow.loadURL('http://localhost:3000/config')
        },
      },
    ],
  },
]

export default function menuInitalizer() {
  const menu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(menu)
}
