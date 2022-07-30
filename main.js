const {app, BrowserWindow} = require('electron')
var path = require('path');

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    fullscreen : true,
    icon: path.join(__dirname, 'ico-basa.ico'),
    backgroundColor: '#274d8b',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      webviewTag: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname,'./renderer/index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', app.quit)

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
