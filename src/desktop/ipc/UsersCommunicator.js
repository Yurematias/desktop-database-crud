const UsersController = require('../controllers/UsersController');
const connection = require('../persistance/connection');

const usersController = new UsersController(connection);

module.exports = {
    create(evt, data) {
        usersController.create(data).then(() => { 
            console.log('user created sucefully');
            evt.reply('user-created', 'user created sucefully');
        }).catch(error => {
            console.log(error.toString());
            evt.reply('user-not-created', error.toString());
        });
    },
    search() {},
    list(evt) {
        usersController.list().then(response => {
            evt.reply('users-listed', response);
        });
    }
}