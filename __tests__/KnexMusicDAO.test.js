const KnexMusicDAO = require('../src/desktop/persistance/dao_classes/knex/KnexMusicDAO');
const connection = require('../src/desktop/persistance/connection');
const crypto = require('crypto');
const musicDA0 = new KnexMusicDAO(connection);
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
    await expect(musicDA0.insert()).rejects.toThrowError('Incorrect body type received');
});

test('Test of insertion and removing', async () => {
    await expect(musicDA0.insert(music)).resolves.toBe('created');
    await expect(musicDA0.delete(music.id)).resolves.toBe('deleted');
});

test('Test of searching', async () => {
    // musicDA0.insert(music);
    // await expect(musicDA0.search)
});