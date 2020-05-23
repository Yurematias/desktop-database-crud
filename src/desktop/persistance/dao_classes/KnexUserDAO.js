module.exports = class KnexUserDAO {
    constructor(connection) {
        if (connection) {
            this.connection = connection;
        } else {
            throw new Error('missing parameter')
        }
    }
    async insert(user) {
        await this.connection('users').insert(user);
    }
    async selectAll() {
        return await this.connection('users').select('*');
    }
    async selectUserByEmail(email) {
        return await this.connection('users')
            .where('email', email)
            .select('*')
            .first();
    }
    async selectUser(password, email) {
        return await this.connection('users')
            .where('password', password)
            .andWhere('email', email)
            .select('name', 'id')
            .first();
    }
    async deleteUser(userId) {
        try {
            await this.connection('users')
                .where('id', userId)
                .delete();
            return 'deleted'   
        } catch (error) {
            throw error;
        }
    }
    async deleteAll() {
        try {
            await this.connection('users')
                .delete();
            return 'deleted all'
        } catch (error) {
            throw error; 
        }
    }
}