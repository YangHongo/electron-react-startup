const electron = require('electron');

const { app, shell, ipcMain } = electron;

const menuTemplate = function () {
    return [
        {
            label: 'Application',
            submenu: [
                {
                    label: 'Quit', accelerator: 'Command+Q',
                    click: function () {
                        app.quit()  // This is a standart function to quit app.
                    }
                }
            ]
        },
        {
            label: 'View',
            submenu: [
                {
                    label: 'About App',
                    click: function () {
                        ipcMain.emit('show-about-window-event') // In such way we can trigger function in the main process.
                    }
                },
                {
                    label: 'Toggle Developer Tools', accelerator: 'F12',
                    click: function (item, focusedWindow) {
                      focusedWindow.webContents.toggleDevTools();
                    }
                },
                {
                    label: 'Reload', accelerator: 'CmdOrCtrl+R',
                    click: function (item, focusedWindow) {
                        focusedWindow.reload(); // reload the page
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
                { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
                { type: 'separator' },
                { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
                { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
                { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
                { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'View Licence',
                    click: function () {
                        shell.openExternal('https://github.com/YangHong92/');
                    }
                },
                { type: 'separator' },
                { label: 'Version 1.0.0-alpha.6', enabled: 'FALSE' }
            ]
        }
    ]
}

module.exports = menuTemplate