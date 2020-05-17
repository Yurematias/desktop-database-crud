const UsersController = require('../controllers/UsersController');
const connection = require('../persistance/connection');

const usersController = new UsersController(connection);

module.exports = {
    create(evt, data) {
        usersController.create(data)
            .then(() => evt.reply('user-created'))
            .catch(() => evt.reply('user-not-created'));
    },
    search() {},
    list() {}
}