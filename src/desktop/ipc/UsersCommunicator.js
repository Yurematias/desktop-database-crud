const UsersController = require('../controllers/UsersController');
const connection = require('../persistance/connection');

const usersController = new UsersController(connection);

module.exports = {
    create(evt, data) {
        usersController.create(data)
            .then(() => { 
                console.log('user created sucefully');
                evt.reply('user-created', 'user created sucefully');
            })
            .catch((response) => {
                console.log(response.toString());
                evt.reply('user-not-created', response.toString());
            });
    },
    search() {},
    list() {}
}