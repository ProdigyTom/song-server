const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        message: String
        songs: [Song]
        songsByArtist(input: String): [Song]
    }

    type Song {
        id: Int!
        name: String!
        artists: String!
        youtubeURL: String
        spotifyEmbedLink: String
        tab: String
        lyricsURL: String
        lessonURL: String
        key: String
        notes: String
    }
`)
