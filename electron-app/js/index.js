const electron = require('electron');
const { app, ipcMain, Menu } = electron;

// These are custom classes that we created only for our comfort.
const MainWindow  = require('../windows/MainWindow');
const menuTemplate = require('./menuTemplate');
const AboutWindow = require('../windows/AboutWindow');
const TrayWindow = require('../windows/TrayWindow');
const TrayIcon = require('./TrayIcon');


const isDev = (process.env.NODE_ENV === 'development');
let installExtension = null;
if ( isDev ) {
  installExtension = require('electron-devtools-installer');
}
// This is some kind of tricky way to install it, but this is caused by npm pacakage
// this pacakage uses ES6 which we do not use for electron.
const installExtentions = function () {
    // If you use some unusual devtools ext. You should specify its ID here.
    installExtension['default']( installExtension['REDUX_DEVTOOLS'] )
    installExtension['default']( installExtension['REACT_DEVELOPER_TOOLS'] )
}


let main = null;
let tray = null;
let trayIcon = null;
let about = null;

// We hide dock, because we do not want to show our app as common app. 
// We want to display our app as a Tray-like app (like Dropbox, Skitch or ets).
// app.dock.hide();

// This event will be emitted when Electron has finished initialization.
app.on('ready', () => {
    if ( isDev ) {
        installExtentions();
    }
    
    main = new MainWindow();
    // We will create menu based on template
    // menuTemplate - is just a function that returns array (that is just extracted into separate file)
    Menu.setApplicationMenu( Menu.buildFromTemplate( menuTemplate() ));

    tray = new TrayWindow();
    about = new AboutWindow();

    trayIcon = new TrayIcon(tray.window);
});

// Custom event created to close the app from Tray Window.
// The ipcMain module is used to handle events from a renderer process (web page).
ipcMain.on('quit-app', function () {
    main.window.close();
    tray.window.close(); // Standart Event of the BrowserWindow object.
    about.window.close();

    app.quit(); // Standart event of the app - that will close our app.
});

ipcMain.on('update-title-tray-window-event', function (event, title) {
    trayIcon.updateTitle(title);
});

// Let's add event that will open our main page (from Tray Window).
ipcMain.on('show-main-window-event', function() {
    main.window.show();
    app.dock.show(); // Do not forget to show dock - because only with dock menu will appear.
});

ipcMain.on('show-about-window-event', function () {
    about.window.show();
});