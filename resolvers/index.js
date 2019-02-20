const dbClient = require('../dbClient');

// Root resolver
module.exports = {
    songs: async () => {
        const res = await dbClient.query('SELECT * FROM songs;');
        return res.rows;
    },
    songsByArtist: async (query) => {
        const { input: artist } = query;

        const res = await dbClient.query(`SELECT * FROM songs WHERE artists = '${artist}';`);
        return res.rows;
    },
};
