// back-end/src/models/index.js
const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

// Certifique-se de passar Sequelize.DataTypes como segundo parâmetro:
const Music = require("./music")(sequelize, Sequelize.DataTypes);

// Importe os outros modelos de maneira semelhante...
// const User = require("./user")(sequelize, Sequelize.DataTypes);
// const Playlist = require("./playlist")(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Sequelize,
  Music,
  // User, Playlist, etc.
};
