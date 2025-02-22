const { DataTypes } = require("sequelize");

module.exports = (sequelize, bataTypes) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("Artist", "LISTENER"),
      defaultValue: "LISTENER",
      allowNull: false,
    },
  });
  return User;
};
