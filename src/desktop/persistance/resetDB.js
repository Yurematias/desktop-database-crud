const MusicDAO = require('../persistance/dao_classes/knex/KnexMusicDAO');
const UserDAO = require('../persistance/dao_classes/knex/KnexUserDAO');
const connection = require('../persistance/connection');

const uDAO = new UserDAO(connection);
const mDAO = new MusicDAO(connection);

let deletions = 0;

uDAO.deleteAll().then(() => {
    console.log('all users deleted successfully');
    deletions++;
}).catch(error => {
    console.log(error);
});

mDAO.deleteAll().then(() => {
    console.log('all musics deleted successfully');
    deletions++;
}).catch(error => {
    console.log(error);
});

setInterval(() => {
    if (deletions == 2) {
        process.exit();
    }
}, 250);