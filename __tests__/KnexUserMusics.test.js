const KnexMusicDAO = require('../src/desktop/persistance/dao_classes/knex/KnexMusicDAO');
const KnexUserDAO = require('../src/desktop/persistance/dao_classes/knex/KnexUserDAO');
const KnexUserMusicsDAO = require('../src/desktop/persistance/dao_classes/knex/KnexUserMusicsDAO');
const connection = require('../src/desktop/persistance/connection');
const crypto = require('crypto');

const userDAO = new KnexUserDAO(connection);
const musicDAO = new KnexMusicDAO(connection);
const umDAO = new KnexUserMusicsDAO(connection);

const id = crypto.randomBytes(4).toString('HEX');

const user = {
    name: 'Sekiro',
    email: 'sekiro@gmail.com',
    password: 'anypassword',
    id
}
const music = {
    name: 'Living in a Ghost Town',
    artist: 'Rolling Stones',
    lyrics: 'I´m a ghost, living in a ghost town',
    id
}

test('test of missing parameters', async () => {
    await expect()
});

test('test of insert and delete', async () => {
    await userDAO.insert(user);
    await musicDAO.insert(music);

    await expect(umDAO.insert(user.id, music.id)).resolves.toBe('created');
    await expect(umDAO.delete(user.id, music.id)).resolves.toBe('deleted');

    await userDAO.deleteUser(user.id);
    await musicDAO.delete(music.id);
});