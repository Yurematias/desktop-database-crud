const MusicDAO = require('../persistance/dao_classes/KnexMusicDAO');
const UserDAO = require('../persistance/dao_classes/KnexUserDAO');
const UserMusicsDAO = require('../persistance/dao_classes/KnexUserMusicsDAO');
const connection = require('../persistance/connection');

const umDAO = new UserMusicsDAO(connection);
const uDAO = new UserDAO(connection);
const mDAO = new MusicDAO(connection);

(async () => {
    await umDAO.deleteAll();
    await uDAO.deleteAll();
    await mDAO.deleteAll();
    console.log('database reseted successfully');
    process.exit();
})();
