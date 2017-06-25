type WindowCreator = new (opt?: Electron.BrowserWindowConstructorOptions) => (
  Electron.BrowserWindow
);

export default function windowInitalizer(size: Electron.Size, windowCreator: WindowCreator) {
  let mainWindow: Electron.BrowserWindow | null = new windowCreator({
    alwaysOnTop: true,
    frame: false,
    height: size.height,
    resizable: false,
    show: true,
    transparent: true,
    width: size.width,
  });
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.maximize();
  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.loadURL("http://localhost:3000");
}
