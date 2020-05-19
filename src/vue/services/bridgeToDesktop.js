import { ipcRenderer } from 'electron';

export const users = {
    create(user) {
        return new Promise((resolve, reject) => {
            ipcRenderer.send('create-user', user);
            ipcRenderer.on('user-created', (evt, resp) => {
                resolve(resp);
            });
            ipcRenderer.on('user-not-created', (evt, error) => {
                reject(error);
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
    },
    search(user) {
        return new Promise((resolve, reject) => {
            ipcRenderer.send('search-user', user);
            ipcRenderer.on('user-found', (evt, user) => {
                resolve(user);
            });
            ipcRenderer.on('user-not-found', (evt, error) => {
                reject(error);
            });
        });
    },
    delete() {
        return new Promise((resolve, reject) => {
            ipcRenderer.send('delete-user');
            ipcRenderer.on('user-deleted', () => {
                resolve('User deleted successfully');
            });
            ipcRenderer.on('user-not-deleted', () => {
                reject('Sorry, it was not possible to delete the user');
            });
        });
    }
}