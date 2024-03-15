const {app,BrowserWindow} = require('electron')
const { start } = require('repl')
const url = require ("url")
const path = require('path')
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title : "Electron",
        width : 1000,
        height : 600,
        icon:path.join(__dirname,'./app/public/assets/favicon.ico'),
        autoHideMenuBar:true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            
          },
    })
    mainWindow.setMenu(null);

// mainWindow.webContents.openDevTools()
    const startUrl = url.format({
        pathname : path.join(__dirname, './app/build/index.html'),
        protocol:'file'

    })
    mainWindow.loadURL(startUrl)
}
app.whenReady().then(createMainWindow)
