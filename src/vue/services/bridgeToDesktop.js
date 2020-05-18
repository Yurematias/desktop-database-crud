import { ipcRenderer } from 'electron'

export const users = {
    create(user) {
        return new Promise((resolve, reject) => {
            ipcRenderer.send('create-user', user);
            ipcRenderer.on('user-created', (evt, resp) => {
                resolve(resp);
            });
            ipcRenderer.on('user-not-created', (evt, resp) => {
                reject(resp);
            });
        });
    },
    list() {
        return new Promise(resolve => {
            ipcRenderer.send('list-users');
            ipcRenderer.on('users-listed', (evt, users) => {
                resolve(users);
            });
        });
    }
}
