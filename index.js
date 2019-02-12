const {app, BrowserWindow} = require('electron');

function createWindow(){
    let win = new BrowserWindow({height: 700, width: 1000});
    win.loadFile("index.html")
}

app.on("ready", createWindow);