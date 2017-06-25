import * as electron from "electron";
import { ipcMain } from "electron";
import deliver from "./twitter";
import windowInitalizer from "./window";

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on("ready", () => {
  const { size } = electron.screen.getPrimaryDisplay();
  windowInitalizer(size, BrowserWindow);
  ipcMain.on("boot", (event, arg) => {
    deliver(event.sender);
  });
});
