const UserMusicsController = require('../controllers/UserMusicsController');
const connection = require('../persistance/connection');
const userMusicsCont = new UserMusicsController(connection);

module.exports = {
    create(evt, userMusic) {
        userMusicsCont.create(userMusic).then(() => {
            console.log('music created successfully');
            evt.reply('user-music-created', 'user music created successfully');
        }).catch(error => {
            console.log(error);
            evt.reply('user-music-not-created', error.toString());
        });
    },
    delete(evt, userMusic) {
        const {userId, musicId} = userMusic;
        userMusicsCont.delete(userId, musicId).then(() => {
            console.log('user music deleted successfully');
            evt.reply('user-music-deleted', 'user music deleted sucessfully');
        }).catch(error => {
            console.log(error);
            evt.reply('user-music-not-deleted', error.toString());
        });
    },
    list(evt) {
        userMusicsCont.list().then(response => {
            evt.reply('user-musics-listed', response);
        });
    }
}