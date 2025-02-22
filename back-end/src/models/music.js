module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
  });
  return Music;
};
