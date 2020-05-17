import { ipcRenderer } from 'electron'

export const users = {
    create(user) {
        return new Promise((resolve, reject) => {
            ipcRenderer.on('user-created', (evt, resp) => {
                resolve(resp);
            });
            ipcRenderer.on('user-not-created', (evt, resp) => {
                reject(resp);
            });
            ipcRenderer.send('create-user', user);
        });
    }
}
