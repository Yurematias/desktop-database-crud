import BackgroundHandler from "./BackgroundHandler";
import { ipcRenderer } from 'electron';

export default class AdvancedBackgroundHandler extends BackgroundHandler {
    constructor(type) {
        super(type);
    }
    search(instance) {
        return new Promise((resolve, reject) => {
            ipcRenderer.send(`search-${this.type}`, instance);
            ipcRenderer.on(`${this.type}-found`, (evt, instance) => {
                resolve(instance);
            });
            ipcRenderer.on(`${this.type}-not-found`, (evt, error) => {
                reject(error);
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            ipcRenderer.send(`delete-${this.type}`, id);
            ipcRenderer.on(`${this.type}-deleted`, () => {
                resolve(`${this.type} deleted successfully`);
            });
            ipcRenderer.on(`${this.type}-not-deleted`, (evt, error) => {
                reject(error);
            });
        });
    }
}