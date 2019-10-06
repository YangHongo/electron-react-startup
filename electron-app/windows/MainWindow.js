const path = require('path');
const Positioner = require('electron-positioner');
const { BrowserWindow } = require('electron');

class MainWindow {
    constructor() {
        let htmlPath = 'file://' + path.join(__dirname, '..') + '/pages/main_page.html'
    
        this.window = new BrowserWindow({
            show: false,
            width: 800,
            height: 600,
            frame: false,
            minWidth: 400,
            minHeight: 400,
            backgroundColor: '#E4ECEF',
            resizable: true,
            webPreferences: {
                nodeIntegration: true //enable require in html page
            }
        })
    
        this.window.loadURL(htmlPath);
        // this.window.webContents.openDevTools();

        // On show - we should display About Window in the center of the screen.
        this.window.on('show', () => {
            let positioner = new Positioner(this.window);
            positioner.move('center');
        });
    }
}

module.exports = MainWindow;