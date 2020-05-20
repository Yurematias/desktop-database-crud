import BackgroundHandler from "./BackgroundHandler";
import { ipcRenderer } from 'electron';

export default class AdvancedBackgroundHandler extends BackgroundHandler {
    constructor(type) {
        super(type);
    }
    search(user) {
        return new Promise((resolve, reject) => {
            ipcRenderer.send(`search-${this.type}`, user);
            ipcRenderer.on(`${this.type}-found`, (evt, user) => {
                resolve(user);
            });
            ipcRenderer.on(`${this.type}-not-found`, (evt, error) => {
                reject(error);
            });
        });
    }
}