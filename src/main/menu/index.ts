import * as electron from 'electron'

const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow
const Menu: typeof Electron.Menu = electron.Menu

const env = process.env.NODE_ENV === 'production'

const handleOpenConfigWindow = () => {
  const configWindow: any = new BrowserWindow({
    frame: env,
    height: 600,
    resizable: env,
    width: 400,
  })
  configWindow.loadURL('http://localhost:3000/config')
  if (process.env.NODE_ENV !== 'production') configWindow.openDevTools()
}

const templateMenu: Electron.MenuItemConstructorOptions[] = [
  {
    label: 'config',
    submenu: [
      {
        label: 'edit',
        click() { handleOpenConfigWindow() },
      },
    ],
  },
]

export default function menuInitalizer() {
  const menu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(menu)
}
