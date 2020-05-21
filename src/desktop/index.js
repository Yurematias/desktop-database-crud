const { ipcMain } = require('electron');
const UsersCommunicator = require('./ipc/UsersCommunicator');
const UserMusicsCommunicator = require('./ipc/UserMusicsCommunicator');
const MusicsCommunicator = require('./ipc/MusicsCommunicator');

(function main() {
    ipcMain.on('create-user', UsersCommunicator.create);
    ipcMain.on('search-user', UsersCommunicator.search);
    ipcMain.on('list-users', UsersCommunicator.list);
    ipcMain.on('delete-user', UsersCommunicator.delete);

    ipcMain.on('create-music', MusicsCommunicator.create);
    ipcMain.on('search-music', MusicsCommunicator.search);
    ipcMain.on('list-musics', MusicsCommunicator.list);
    ipcMain.on('delete-music', MusicsCommunicator.delete);
    
    ipcMain.on('create-user-music', UserMusicsCommunicator.create);
    ipcMain.on('search-user-music', UserMusicsCommunicator.search);
    ipcMain.on('list-user-musics', UserMusicsCommunicator.list);
})();
