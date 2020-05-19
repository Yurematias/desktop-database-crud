const UsersController = require('../controllers/UsersController');
const connection = require('../persistance/connection');

const usersController = new UsersController(connection);

module.exports = {
    create(evt, user) {
        usersController.create(user).then(() => { 
            console.log('user created sucefully');
            evt.reply('user-created', 'user created sucefully');
        }).catch(error => {
            console.log(error.toString());
            evt.reply('user-not-created', error.toString());
        });
    },
    search(evt, user) {
        usersController.search(user).then(response => {
            console.log('user found');
            evt.reply('user-found', response);
        }).catch(error => {
            console.log(error.toString());
            evt.reply('user-not-found', error.toString());
        });
    },
    list(evt) {
        usersController.list().then(response => {
            evt.reply('users-listed', response);
        });
    },
    delete(evt, userId) {
        usersController.delete(userId).then(() => {
            console.log('user deleted successfully');
            evt.reply('user-deleted');
        }).catch(error => {
            console.log(error.toString());
            evt.reply('user-not-deleted', error.toString());
        })
    }
}