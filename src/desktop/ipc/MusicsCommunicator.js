const MusicsController = require('../controllers/MusicsController');
const connection = require('../persistance/connection');

const musicsController = new MusicsController(connection);

module.exports = {
    create(evt, music) {
        musicsController.create(music).then(() => {
            console.log('music created successfully');
            evt.reply('music-created', 'music created successfully');
        }).catch(error => {
            console.log(error);
            evt.reply('music-not-created', error.toString());
        });
    },
    list(evt) {
        musicsController.list().then(response => {
            evt.reply('musics-listed', response);
        });
    },
    search(evt, music) {
        musicsController.search(music).then(response => {
            console.log('music-found');
            evt.reply('music-found', response);
        }).catch(error => {
            console.log(error);
            evt.reply('music-not-found', error.toString());
        });
    },
    delete(evt, musicId) {
        musicsController.delete(musicId).then(() => {
            console.log('music deleted successfully');
            evt.reply('music-deleted')
        }).catch(error => {
            console.log(error);
            evt.reply('music-not-deleted');
        });
    }
}