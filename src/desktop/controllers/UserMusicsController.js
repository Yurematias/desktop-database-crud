const KnexUserMusicsDAO =  require('../persistance/dao_classes/KnexUserMusicsDAO');

let uMusicsDAO;

// return true if the user already saved the music
async function didMusicAlreadyExists(musicId, userId) {
    const instanceExists = await uMusicsDAO.select(musicId, userId);
    return instanceExists ? true : false;
}

class UserMusicsController {
    constructor(connection) {
        if (!connection) {
            throw new Error('Missing parameter connection');
        }
        uMusicsDAO = new KnexUserMusicsDAO(connection);
    }
    async create(userMusic) {
        if (!userMusic) {
            throw new Error('Missing parameter userMusic');
        }
        const {userId, musicId} = userMusic;

        if (await didMusicAlreadyExists(musicId, userId)) {
            throw new Error('user music already exists');
        } 
        try {
            return await uMusicsDAO.insert(musicId, userId);
        } catch (error) {
            throw error;
        }
    }
    async list() {
        try {
            return await uMusicsDAO.selectAll();
        } catch (error) {
            throw error;
        }
    }
    async delete(userId, musicId) {
        let musicToDelete;
        try {
            musicToDelete = await uMusicsDAO.select(musicId, userId);
        } catch (error) {
            throw error;
        }
        if (musicToDelete) {
            try {
                return await uMusicsDAO.delete(userId, musicId);
            } catch (error) {
                throw error;   
            }
        } else {
           throw new Error('does not have any music with this parameters');
        }
    }
}

module.exports = UserMusicsController;