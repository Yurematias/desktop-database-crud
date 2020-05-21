const MusicDAO = require('../abstract/AbstractMusicDAO');

module.exports = class KnexMusicDAO extends MusicDAO {
    /**
     * Data Access Object to manipulate the table of Musics in the database
     * 
     * @param {Object} connection the connection object 
     */
    constructor(connection) {
        super();
        if (connection) {
            this.connection = connection;
        } else {
            throw new Error('missing argument');
        }
    }
    /**
     * method to insert a music in the database
     * 
     * @param {Object} music the object with the music data to be inserted in the musics table
     */
    async insert(music) {
        if (music && music.name && music.artist && music.lyrics) {
            try {
                await this.connection('musics').insert(music);
                return 'created';
            } catch (error) {
                throw error;
            }
        } else {
            throw new Error('Incorrect body type received');
        }
    }
    /**
     * method to get a specific music of the database
     * 
     * @param {String} musicName the name of the music that will be used to search the id 
     * @param {String} artist the name of the music that will be used to search the id 
     * 
     * @returns {Object} returns the id of the music found
     */
    async search(musicName, musicArtist) {
        if (musicName && musicArtist) {
            try {
                return await this.connection('musics')
                    .where('name', musicName)
                    .andWhere('artist', musicArtist)
                    .select('*')
                    .first();
            } catch (error) {
                return error;
            }
        } else {
            throw new Error('invalid arguments received');
        }
    }
    /**
     * method to select all the registers of the music table from the database
     */
    async selectAll() {
        try {
            return await this.connection('musics').select('*');
        } catch (error) {
            throw error;
        }
    }
    /**
     * method to delete a instance of music in the database 
     * 
     * @param {String} musicId the id of the music that will be deleted
     */
    async delete(musicId) {
        try {
            await this.connection('musics')
                .where('id', musicId)
                .delete();
            return 'deleted';
        } catch (error) {
            throw error;
        }
    }
    /**
     * method to delete all the instances of the musics table
     */
    async deleteAll() {
        try {
            await this.connection('musics')
                .delete();
            return 'deleted all'
        } catch (error) {
            throw error;
        }
    }
}
