const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("clientInfo", {
  dialect: "sqlite",
  host: "./database/userDB.db",
});

module.exports = sequelize;
