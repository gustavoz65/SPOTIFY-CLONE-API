require("dotenv").config();

module.exports = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "mysecret",
  database: process.env.DB_NAME || "clone_spotify",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  dialect: "postgres",
};
