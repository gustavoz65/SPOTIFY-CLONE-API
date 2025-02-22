module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define("Playlist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Playlist;
};
