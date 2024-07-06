const express = require("express");
const cors = require("cors");

const sqlite = require("sqlite3").verbose();
const json = express.json();

const app = express();
const port = process.env.PORT || 3000;

const db = new sqlite.Database("./database/userDB.db", (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Express Init.");
});

app.use(express.json());
app.use(cors());

app.get("/listall", (req, res) => {
  db.all("SELECT * FROM clientInfo", (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Internal error");
    } else {
      res.send(rows);
    }
  });
});

app.post("/createuser", (req, res) => {
  var data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateBirth: req.body.dateBirth,
    languages: req.body.languages,
    fundingSource: req.body.fundingSource,
  };

  db.run(
    "INSERT INTO clientInfo (firstName, lastName, dateBirth, languages, fundingSource) VALUES (?,?,?,?,?)",
    data.firstName,
    data.lastName,
    data.dateBirth,
    data.languages,
    data.fundingSource,
    (err, res) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.json({
        message: "success",
        data: data,
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Express Listening on ${port}`);
});
