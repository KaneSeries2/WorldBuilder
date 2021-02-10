const {
    app,
    BrowserWindow,
    dialog,
    Menu
} = require('electron');
const applicationMenu = require('./application-menu');
const fs = require('fs');

const windows = new Set();
const openFiles = new Map();

app.on('ready', () => {
    Menu.setApplicationMenu(applicationMenu);
    createWindow();
});

// ... Additional methods below ...
