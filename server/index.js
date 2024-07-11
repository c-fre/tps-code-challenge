const express = require("express");
const cors = require("cors");
const app = express();

const sqlite = require("sqlite3").verbose();
const json = express.json();

const port = process.env.PORT || 3000;

const db = new sqlite.Database("./database/userDB.db", (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Express Init.");
});

app.use(express.json());
app.use(
  cors({
    methods: "*",
    origin: "*",
  })
);

//List All Users (UserList)
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

//Get Single User (EditUser/DeleteUser)
app.get("/getuser/:id", (req, res) => {
  var id = req.params.id;

  db.get("SELECT * FROM clientInfo WHERE clientID = ?", [id], (err, row) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Internal error");
      return;
    } else if (!row) {
      res.status(404).send("User Not Found");
    } else {
      res.send(row);
    }
  });
});

//Update User (EditUser)
app.put("/updateuser/:id", (req, res) => {
  var data = {
    clientID: req.params.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateBirth: req.body.dateBirth,
    languages: req.body.languages,
    fundingSource: req.body.fundingSource,
  };

  db.run(
    "UPDATE clientInfo SET FirstName = ? , LastName = ? , DateBirth = ? , Languages = ? , FundingSource = ? WHERE clientID = ?",
    [
      data.firstName,
      data.lastName,
      data.dateBirth,
      data.languages,
      data.fundingSource,
      data.clientID,
    ],
    (err) => {
      if (err) {
        console.log(err.message);
        res.status(500).send("Internal error");
        return;
      }
    }
  );
});

//Delete User (EditUser)
app.delete("/deleteuser/:id", (req, res) => {
  var data = {
    clientID: req.params.id,
  };

  db.run("DELETE FROM clientInfo WHERE clientID=?", [data.clientID], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Internal error");
      return;
    }
  });
});

//Create User to DB (UserForm)
app.post("/createuser", (req, res) => {
  var data = {
    clientID: req.body.clientID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateBirth: req.body.dateBirth,
    languages: req.body.languages,
    fundingSource: req.body.fundingSource,
  };

  db.run(
    "INSERT INTO clientInfo (clientID, firstName, lastName, dateBirth, languages, fundingSource) VALUES (?,?,?,?,?,?)",
    data.clientID,
    data.firstName,
    data.lastName,
    data.dateBirth,
    data.languages,
    data.fundingSource,
    (err, res) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Express Listening on ${port}`);
});
