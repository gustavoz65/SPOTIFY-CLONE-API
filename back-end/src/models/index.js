const Squelize = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

const User = require("./user")(sequelize, Sequelize.dataTypes);
const Music = require("./music")(sequelize, Sequelize.dataTypes);
const Playlist = require("./playlist")(sequelize, Sequelize.dataTypes);

const PlaylistMusic = sequelize.define(
  "Playlistmusic",
  {},
  {
    timestamps: false,
  }
);

User.hasMany(Music, {
  foreignkey: "artistId",
  as: "music",
});

Music.belongsTo(User, {
  foreignkey: "artistId",
  as: "artist",
});

User.hasMany(Playlist, {
  foreignkey: "userId",
  as: "playlist",
});

Playlist.belongsTo(User, {
  foreignkey: "userId",
  as: "user",
});

Playlist.belongsToMany(Music, {
  through: PlaylistMusic,
  foreignkey: "playlistId",
  as: "songs",
});

module.exports = {
  sequelize,
  Sequelize,
  User,
  Music,
  Playlist,
  PlaylistMusic,
};
