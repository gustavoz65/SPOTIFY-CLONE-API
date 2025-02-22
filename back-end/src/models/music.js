module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
  });
  return Music;
};
