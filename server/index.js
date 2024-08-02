const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const app = express();

const sqlite = require("sqlite3").verbose();
const json = express.json();

const port = process.env.PORT || 3000;

sequelize.sync().then(() => console.log("seq setup"));

const db = new sqlite.Database("./database/userDB.db", (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Express Init. - test ver 0.2");
});

app.use(express.json());
app.use(cors());

/* 
OLD Api GETS for site:
/listall
/getuser/:id
/updateuser/:id
/deleteuser/:id
/createuser
*/

app.listen(port, () => {
  console.log(`Express Listening on ${port}`);
});
