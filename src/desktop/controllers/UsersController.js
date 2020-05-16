const crypto = require('crypto');
const KnexUsersHandler = require('../database/handlers/knex/KnexUsersHandler');

let usersTable;

async function didUserAlreadyExists(email) {
    let response;
    try {
        response = await usersTable.selectUserByEmail(email);
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
        usersTable = new KnexUsersHandler(connection);
    }
    async create(evt, data) {
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = {...data, id };
        if (await didUserAlreadyExists(data.email)) {
            throw new Error('this email already have an account');
        } else {
            try {
                await usersTable.insert(dataToInsert);
                // equivalent to Promise.resolve(); in a promise syntax
                return 'user inserted succefully';
            } catch (error) {
                // equivalent to Promise.reject(); in a promise syntax
                throw new Error('error at insert user in the database');
            }
        }
    }
    async list(req, res) {
        const users = await usersTable.selectAll();
        if (users) {
            // equivalent to Promise.resolve(); in a promise syntax
            return users;
        } else {
            // equivalent to Promise.reject(); in a promise syntax
            throw new Error('No users found');
        }
    }
}

module.exports = UsersController;