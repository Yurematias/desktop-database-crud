const crypto = require('crypto');
const KnexMusicDAO = require('../persistance/dao_classes/knex/KnexMusicDAO');

let musicDAO;

async function musicAlreadyExists(music) {
    const musicId = await databaseHandler.selectId(music.name, music.artist);
    return musicId || false;
}

class MusicsController {
    constructor(connection) {
        if (!connection) {
            throw new Error('Missing parameter connection');
        }
        musicDAO = new KnexMusicDAO(connection); 
    }
    async create(music) {
        if (music && music.name && music.artist && music.lyrics) {
            const id = crypto.randomBytes(4).toString('HEX');
            const music = { ...music, id };
    
            if (await musicAlreadyExists(music)) {
                throw new Error('This music already exists');
            } else {
                try {
                    return await musicDAO.insert(music);
                } catch (error) {
                    throw error;
                }
            }
        } else {
            throw new Error('Missing parameters or atributes in argument music');
        }
    }
    async search(musicId) {
        if (musicId) {
            try {
                return await musicDAO.search(musicId);
            } catch (error) {
                throw error;
            }
        } else {
            throw new Error('missing parameter musicId');
        }
    }
    async list() {
        try {
            return await musicDAO.selectAll();
        } catch (error) {
            throw error;
        }
    }
    async delete(musicId) {
        try {
            return await musicDAO.delete(musicId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MusicsController;