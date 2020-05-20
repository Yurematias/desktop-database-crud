const KnexMusicDAO = require('../src/desktop/persistance/dao_classes/knex/KnexMusicDAO');
const connection = require('../src/desktop/persistance/connection');
const crypto = require('crypto');
const musicDAO = new KnexMusicDAO(connection);
let music;

beforeEach(() => {
    music = {
        name: "That's Life",
        artist: 'Frank Sinatra',
        lyrics: "That´s life, it's that all the people say",
        id: crypto.randomBytes(4).toString('HEX')
    }
});

test('Test of insertion Error: incorrect body type', async () => {
    await expect(musicDAO.insert()).rejects.toThrowError('Incorrect body type received');
});

test('Test of insertion and removing', async () => {
    await expect(musicDAO.insert(music)).resolves.toBe('created');
    await expect(musicDAO.delete(music.id)).resolves.toBe('deleted');
});

test('Test of search', async () => {
    const musicToInsert = { ...music };
    musicToInsert.id = 'test_id';
    await musicDAO.insert(musicToInsert);
    await expect(musicDAO.search(musicToInsert.id)).resolves.toEqual(musicToInsert);
    musicDAO.delete(musicToInsert.id);
});