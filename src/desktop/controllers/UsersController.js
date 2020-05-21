const crypto = require('crypto');
const KnexUserDAO = require('../persistance/dao_classes/knex/KnexUserDAO');

let userDAO;

async function didUserAlreadyExists(email) {
    let response;
    try {
        response = await userDAO.selectUserByEmail(email);
        return response;
    } catch (error) {
        return true;
    }
}

class UsersController {
    constructor(connection) {
        if (!connection) {
            throw new Error('Missing parameter connection');
        }
        userDAO = new KnexUserDAO(connection);
    }
    async create(user) {
        if (!user) {
            throw new Error('Missing argument user');
        } else if (!user.email || !user.name || !user.password) {
            throw new Error('missing attributes in object user');
        }
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = {...user, id };
        if (await didUserAlreadyExists(user.email)) {
            throw new Error('this email already have an account');
        } else {
            try {
                await userDAO.insert(dataToInsert);
                // equivalent to Promise.resolve(); in a promise syntax
                return 'created';
            } catch (error) {
                // equivalent to Promise.reject(); in a promise syntax
                throw new Error(error);
            }
        }
    }
    async search(user) {
        if (!user) {
            throw new Error('Missing argument user');
        } else if (!user.email || !user.password) {
            throw new Error('missing attributes in object user');
        }
        try {
            return await userDAO.selectUser(user.password, user.email);
        } catch (error) {
            throw error;
        }
    }
    async list() {
        try {
            return await userDAO.selectAll();
        } catch (error) {
            throw error;
        }
    }
    async delete(userId) {
        try {
            return await userDAO.deleteUser(userId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsersController;